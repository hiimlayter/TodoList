namespace Domain.Models.Results
{
    public class RegisterResultModel
    {
        public string Message { get; set; } = string.Empty;
        public bool IsSuccess { get; set; }
        public string CreatedUserId { get; set; } = string.Empty;
    }
}