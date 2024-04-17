using Application.Services.Interfaces;
using Domain.Entities;
using Domain.Models.Requests;

namespace Application.Services.Implementations
{
    public class TodoService : ITodoService
    {
        public Task<Todo> CreateTodoAsync(CreateTodoRequestModel todoModel)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteTodoAsync(int todoID)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Todo>> GetAllTodosAsync()
        {
            throw new NotImplementedException();
        }

        public Task<Todo> GetTodoByIdAsync(int todoID)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Todo>> GetUserTodosAsync(string userId)
        {
            throw new NotImplementedException();
        }

        public Task<Todo> UpdateTodoAsync(UpdateTodoRequestModel todoModel)
        {
            throw new NotImplementedException();
        }
    }
}