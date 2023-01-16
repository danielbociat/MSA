using Microsoft.AspNetCore.Mvc;
using quizeroo.API.requests;
using quizeroo.Core.Models;
using quizeroo.Core.Database;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Authorization;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace quizeroo.API.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        public UsersController( ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET: api/<UsersController>
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> Get()
        {
            var users = await _dbContext.Users.ToListAsync();

            return Ok(users);
        }

        // GET api/<UsersController>/5
        [HttpGet("{id}")]
        [Authorize]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<UsersController>
        [HttpPost]
        public async Task<IActionResult> AddUser(AddUserRequest User)
        {
            var userEmail = await _dbContext.Users.Where(u => u.Email == User.Email).FirstOrDefaultAsync();
            var userUsername = await _dbContext.Users.Where(u => u.Username == User.Username).FirstOrDefaultAsync();

            if(userEmail != null)
            {
                return BadRequest(new {errorMessage = "Email already in use" });
            }

            if(userUsername != null)
            {
                return BadRequest(new { errorMessage = "Username is already taken" });
            }

            SHA256 mySHA256 = SHA256.Create();
            var result = new User() { Username = User.Username, Email = User.Email, Password = Convert.ToHexString(mySHA256.ComputeHash(Encoding.UTF8.GetBytes(User.Password))) };
            await _dbContext.Users.AddAsync(result);
            await _dbContext.SaveChangesAsync();

            return Ok(result);
        }
    }
}
