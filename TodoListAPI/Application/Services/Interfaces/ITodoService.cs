using Domain.Models.Dto;
using Domain.Models.Requests;

namespace Application.Services.Interfaces
{
    public interface ITodoService
    {
        Task<TodoDto> CreateTodoAsync(string userId, CreateTodoRequestModel todoModel);

        Task<IEnumerable<TodoDto>> GetAllTodosAsync();

        Task<IEnumerable<TodoDto>> GetUserTodosAsync(string userId);

        Task<TodoDto> GetTodoByIdAsync(string userId, int todoId);

        Task<TodoDto> UpdateTodoAsync(string userId, int todoId, CreateTodoRequestModel todoModel);

        Task<bool> DeleteTodoAsync(string userId, int todoId);
    }
}