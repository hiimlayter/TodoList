using Microsoft.AspNetCore.Identity;

namespace Domain.Entities
{
    public class AppUser : IdentityUser
    {
        public ICollection<Todo> Todos { get; set; } = [];
    }
}