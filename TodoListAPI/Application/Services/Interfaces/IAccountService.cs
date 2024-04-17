using Domain.Models.Requests;
using Domain.Models.Results;

namespace Application.Services.Interfaces
{
    public interface IAccountService
    {
        public Task<RegisterResultModel> RegisterUserAsync(RegisterRequestModel model);

        public Task<LoginResultModel> LoginUserAsync(LoginRequestModel model);

        public Task LogoutUserAsync();
    }
}