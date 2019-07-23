using System.Threading.Tasks;
using DatingApp.API.Models;
using DatingApp.API.Models.DTOs;
using DatingApp.API.Persistance;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;


        public AuthController(IAuthRepository repo)
        {
            this._repo = repo;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userDto) 
        {
            //TODO: validate request

            userDto.Username = userDto.Username.ToLower();

            if (await _repo.UserExists(userDto.Username)) 
                return BadRequest("Username already exists!");

            var userToCreate = new User
            {
                Username = userDto.Username
            };

            var createdUser = await _repo.Register(userToCreate, userDto.Password);

            return StatusCode(201);
        }
    }
}