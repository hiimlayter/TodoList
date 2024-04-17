using Application.Services.Interfaces;
using Domain.Models.Requests;
using Domain.Models.Results;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace TodoListAPI.Controllers
{
    [ApiController]
    [Route("api/account")]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpPost]
        [Route("Register")]
        [ProducesResponseType(typeof(RegisterResultModel), StatusCodes.Status200OK)]
        public async Task<IActionResult> Register([FromBody] RegisterRequestModel registrationRequest)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var result = await _accountService.RegisterUserAsync(registrationRequest);
                    if (result.IsSuccess)
                    {
                        return Ok(result);
                    }
                    return BadRequest(result.Message);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.ToString());
                }
            }
            return BadRequest();
        }

        [HttpPost]
        [Route("Login")]
        [ProducesResponseType(typeof(LoginResultModel), StatusCodes.Status200OK)]
        public async Task<IActionResult> Login([FromBody] LoginRequestModel loginRequest)
        {
            if (ModelState.IsValid)
            {
                await HttpContext.SignOutAsync(IdentityConstants.ExternalScheme);

                var result = await _accountService.LoginUserAsync(loginRequest);
                if (result.IsSuccess)
                {
                    return Ok(result);
                }
                return BadRequest(result.Message);
            }
            return BadRequest();
        }

        [HttpPost]
        [Route("Logout")]
        public async Task<IActionResult> Logout()
        {
            await _accountService.LogoutUserAsync();
            return Ok();
        }
    }
}