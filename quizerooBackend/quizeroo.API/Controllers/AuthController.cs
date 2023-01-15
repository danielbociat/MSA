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
        public AuthController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
            _sha256 = SHA256.Create(); 
        }


        // POST: api/<AuthController>
        [HttpPost]
        public async Task<IActionResult> Login(LoginRequest User)
        {
            var user = await _dbContext.Users.Where(u => u.Username == User.Username && u.Password == Convert.ToHexString(_sha256.ComputeHash(Encoding.UTF8.GetBytes(User.Password)))).FirstOrDefaultAsync();

            if (user == null)
                return BadRequest("User does not exist or wrong password!");

            var key = _sha256.ComputeHash(Encoding.UTF8.GetBytes("Key")); /// come up with something smarter

            var tokenHandler = new JwtSecurityTokenHandler();
            var claims = new List<Claim>
                {
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.Email, user.Email),
                    new Claim(ClaimTypes.Name, user.Username)
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
