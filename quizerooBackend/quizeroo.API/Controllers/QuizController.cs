using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using quizeroo.Core.Database;
using quizeroo.Core.Views;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace quizeroo.API.Controllers
{
    [Route("api/quiz")]
    [ApiController]
    public class QuizController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        public QuizController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET: api/<QuizController>
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> Get()
        {
            var quizes = await _dbContext.Quizes.Select(q => new QuizView()
            {
                id = q.Id,
                title = q.QuizTitle,
                user = q.User != null ? q.User.Username : String.Empty,
            }).ToListAsync();

            return Ok(quizes);
        }

        // GET api/<QuizController>/5
        [HttpGet("{id}")]
        [Authorize]
        public async Task<IActionResult> GetById(int id) /// TODO: Validate token
        {
            var quiz = await _dbContext.Quizes.Where(q => q.Id == id).FirstAsync();
            var questions = await _dbContext.QuizQuestions.Where(q => q.Id == id).ToListAsync();

            return Ok(new {title = quiz.QuizTitle, quiz_questions = questions});
        }

        // POST api/<QuizController>
        [HttpPost]
        [Authorize]
        public void Post()
        {
            var user_id = HttpContext.User.FindFirstValue("userId");
        }
    }
}
