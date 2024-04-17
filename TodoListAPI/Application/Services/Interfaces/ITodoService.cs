using Domain.Entities;
using Domain.Models.Requests;

namespace Application.Services.Interfaces
{
    public interface ITodoService
    {
        Task<IEnumerable<Todo>> GetAllTodosAsync();

        Task<IEnumerable<Todo>> GetUserTodosAsync(string userId);

        Task<Todo> GetTodoByIdAsync(int todoID);

        Task<bool> DeleteTodoAsync(int todoID);

        Task<Todo> CreateTodoAsync(CreateTodoRequestModel todoModel);

        Task<Todo> UpdateTodoAsync(UpdateTodoRequestModel todoModel);
    }
}