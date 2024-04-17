using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class Todo
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        public string Description { get; set; } = string.Empty;
        public DateTime Date { get; set; }
        public bool IsDone { get; set; }
        public string UserId { get; set; }

        //Navigation Properties
        [ForeignKey(nameof(UserId))]
        public AppUser User { get; set; }
    }
}