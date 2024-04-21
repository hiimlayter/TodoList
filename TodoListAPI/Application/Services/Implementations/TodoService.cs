using Application.Services.Interfaces;
using Domain.Entities;
using Domain.Models.Dto;
using Domain.Models.Requests;
using Infrastructure.Data_Persistance;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Application.Services.Implementations
{
    public class TodoService : ITodoService
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly ILogger<TodoService> _logger;
        private readonly DataContext _dataContext;

        public TodoService(UserManager<AppUser> userManager, ILogger<TodoService> logger, DataContext dataContext)
        {
            _userManager = userManager;
            _logger = logger;
            _dataContext = dataContext;
        }

        public async Task<TodoDto> CreateTodoAsync(string userId, CreateTodoRequestModel todoModel)
        {
            var todo = new Todo
            {
                Title = todoModel.Title,
                Description = todoModel.Description,
                IsDone = todoModel.IsDone,
                Date = todoModel.Date,
                UserId = userId,
            };

            await _dataContext.Todo.AddAsync(todo);
            await _dataContext.SaveChangesAsync();

            return new TodoDto(todo);
        }

        public async Task<IEnumerable<TodoDto>> GetAllTodosAsync()
        {
            var todosList = await _dataContext.Todo.ToListAsync();

            return todosList.ConvertAll(x => new TodoDto(x));
        }

        public async Task<TodoDto> GetTodoByIdAsync(string userId, int todoId)
        {
            var todo = await GetTodoFromDatabaseById(todoId);

            CheckIfUserIsAllowedToPerformActions(todo, userId);

            return new TodoDto(todo);
        }

        public async Task<IEnumerable<TodoDto>> GetUserTodosAsync(string userId)
        {
            var todosList = await _dataContext.Todo.Where(x => x.UserId == userId).ToListAsync();

            return todosList.ConvertAll(x => new TodoDto(x));
        }

        public async Task<TodoDto> UpdateTodoAsync(string userId, int todoId, CreateTodoRequestModel todoModel)
        {
            var todo = await GetTodoFromDatabaseById(todoId);

            CheckIfUserIsAllowedToPerformActions(todo, userId);

            todo.Title = todoModel.Title;
            todo.Description = todoModel.Description;
            todo.Date = todoModel.Date;
            todo.IsDone = todoModel.IsDone;

            await _dataContext.SaveChangesAsync();

            return new TodoDto(todo);
        }

        public async Task<bool> DeleteTodoAsync(string userId, int todoId)
        {
            var todo = await GetTodoFromDatabaseById(todoId);

            CheckIfUserIsAllowedToPerformActions(todo, userId);

            _dataContext.Todo.Remove(todo);
            await _dataContext.SaveChangesAsync();

            return true;
        }

        //Helpers

        private async Task<Todo> GetTodoFromDatabaseById(int todoId)
        {
            var todo = await _dataContext.Todo.FindAsync(todoId);

            if (todo == null)
            {
                throw new KeyNotFoundException("Todo with specified ID does not exist");
            }

            return todo;
        }

        private void CheckIfUserIsAllowedToPerformActions(Todo todo, string userId)
        {
            if (todo.UserId != userId)
            {
                throw new UnauthorizedAccessException("This user us not allowed to edit given item");
            }
        }
    }
}