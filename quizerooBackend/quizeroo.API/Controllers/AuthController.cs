using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using quizeroo.API.requests;
using quizeroo.Core.Database;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace quizeroo.API.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly SHA256 _sha256;
        private readonly IConfiguration _configuration;
        public AuthController(ApplicationDbContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _sha256 = SHA256.Create();
            _configuration = configuration;
        }


        // POST: api/<AuthController>
        [HttpPost]
        public async Task<IActionResult> Login(LoginRequest User)
        {
            var user = await _dbContext.Users.Where(u => u.Username == User.Username && u.Password == Convert.ToHexString(_sha256.ComputeHash(Encoding.UTF8.GetBytes(User.Password)))).FirstOrDefaultAsync();

            if (user == null)
                return BadRequest("User does not exist or wrong password!");

            var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);

            var tokenHandler = new JwtSecurityTokenHandler();
            var claims = new List<Claim>
                {
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.Email, user.Email),
                    new Claim(ClaimTypes.Name, user.Username),
                    new Claim("userId", user.Id.ToString())
                };
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddDays(10),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                   SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
            return Ok(new {Token = token});
        }
    }
}
