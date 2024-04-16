using Domain.Entities;
using Domain.Models.Requests;

namespace Application.Services.Interfaces
{
    public interface ITodoService
    {
        Task<IEnumerable<Todo>> GetAllTasksAsync();

        Task<IEnumerable<Todo>> GetUserTasksAsync(string userId);

        Task<Todo> GetTodoByIdAsync(string userId);

        Task<bool> DeleteTaskAsync(int taskID);

        Task<Todo> CreateTaskAsync(CreateTodoRequestModel taskModel);

        Task<Todo> UpdateTaskAsync(UpdateTodoRequestModel taskModel);
    }
}