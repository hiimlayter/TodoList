using Application.Services.Interfaces;
using Domain.Entities;
using Domain.Models.Requests;
using Domain.Models.Results;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using System.Security.Claims;

namespace Application.Services.Implementations
{
    public class AccountService : IAccountService
    {
        private readonly SignInManager<AppUser> _signInManager;
        private readonly UserManager<AppUser> _userManager;
        private readonly ILogger<AccountService> _logger;

        public AccountService(
            ILogger<AccountService> logger,
            UserManager<AppUser> userManager,
            SignInManager<AppUser> signInManager)
        {
            _logger = logger;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<LoginResultModel> LoginUserAsync(LoginRequestModel model)
        {
            var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, false, lockoutOnFailure: false);
            if (result.Succeeded)
            {
                return new LoginResultModel()
                {
                    IsSuccess = true,
                };
            }
            else
            {
                return new LoginResultModel()
                {
                    IsSuccess = false,
                    Message = "Login unsuccessful"
                };
            }
        }

        public async Task LogoutUserAsync()
        {
            await _signInManager.SignOutAsync();
        }

        public async Task<RegisterResultModel> RegisterUserAsync(RegisterRequestModel model)
        {
            var user = new AppUser()
            {
                UserName = model.Email,
                Email = model.Email,
                FirstName = model.FirstName,
                LastName = model.LastName,
            };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                var userId = await _userManager.GetUserIdAsync(user);

                await _userManager.AddClaimAsync(user, new Claim("AppUserId", userId));

                await _signInManager.SignInAsync(user, isPersistent: false);

                return new RegisterResultModel()
                {
                    IsSuccess = true,
                    CreatedUserId = userId,
                };
            }

            return new RegisterResultModel()
            {
                IsSuccess = false,
                Message = string.Join(", ", result.Errors.Select(x => x.Description))
            };
        }
    }
}