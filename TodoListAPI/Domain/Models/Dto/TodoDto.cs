using Domain.Entities;

namespace Domain.Models.Dto
{
    public class TodoDto
    {
        public TodoDto()
        { }

        public TodoDto(Todo todo)
        {
            Id = todo.Id;
            Title = todo.Title;
            Description = todo.Description;
            Date = todo.Date;
            IsDone = todo.IsDone;
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; } = string.Empty;
        public DateTime Date { get; set; }
        public bool IsDone { get; set; }
    }
}