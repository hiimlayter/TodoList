using System.ComponentModel.DataAnnotations;

namespace Domain.Models.Requests
{
    public class CreateTodoRequestModel
    {
        [Required(AllowEmptyStrings = false, ErrorMessage = "Todo has no title")]
        public string Title { get; set; }

        public string Description { get; set; } = string.Empty;

        public bool IsDone { get; set; }
        public DateTime Date { get; set; }
    }
}