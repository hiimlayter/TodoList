using Application.Services.Implementations;
using Application.Services.Interfaces;
using Domain.Entities;
using Infrastructure.Data_Persistance;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Serilog;
using Serilog.Debugging;
using System.Diagnostics;

var builder = WebApplication.CreateBuilder(args);

//Logging

SelfLog.Enable(msg => Debug.WriteLine(msg));
var logger = new LoggerConfiguration()
    .ReadFrom.Configuration(new ConfigurationBuilder().AddJsonFile("serilog-configuration.json").Build())
    .Enrich.FromLogContext()
    .CreateLogger();
builder.Logging.ClearProviders();
builder.Logging.AddSerilog(logger);

var MyAllowSpecificOrigins = "AllowAngularOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        builder =>
        {
            builder.WithOrigins("http://localhost:4200")
            .AllowCredentials()
            .AllowAnyHeader()
            .WithMethods("GET", "POST", "PUT", "DELETE");
        });
});

//Identity + Database

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<DataContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddDefaultIdentity<AppUser>(options =>
    options.SignIn.RequireConfirmedAccount = false)
    .AddEntityFrameworkStores<DataContext>();

//Services
builder.Services.AddScoped<IAccountService, AccountService>();
builder.Services.AddScoped<ITodoService, TodoService>();

builder.Services.Configure<IdentityOptions>(options =>
{
    options.User.RequireUniqueEmail = true;
    options.Password.RequiredLength = 8;
    options.Password.RequireDigit = true;
});

builder.Services.ConfigureApplicationCookie(options =>
{
    options.Cookie.Name = "TodoListAppCookie";
    options.Cookie.HttpOnly = true;
    options.LoginPath = "/api/account/Login";
    options.Cookie.SameSite = SameSiteMode.None;
    options.SlidingExpiration = true;
    options.ExpireTimeSpan = TimeSpan.FromDays(14);
});

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseRouting();

app.UseCors("AllowAngularOrigins");
app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();