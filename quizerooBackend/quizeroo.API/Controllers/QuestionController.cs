using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using quizeroo.Core.Database;
using System.Security.Claims;

namespace quizeroo.API.Controllers
{
    [Route("api/question")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        public QuestionController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        
        // POST api/<QuestionController>
        [HttpPost("{id_q}/{id_a}")]
        [Authorize]
        public async Task<IActionResult> PostQuiz(int id_q, int id_a)
        {
            var user_id = Int32.Parse(HttpContext.User.FindFirstValue("userId"));
            var user = await _dbContext.Users.Where(u => u.Id == user_id).FirstOrDefaultAsync();

            if (user != null)
            {
                var answer = await _dbContext.Answers.Where(a => a.QuizQuestionId == id_q && a.Id == id_a).FirstOrDefaultAsync();
                var correct_answer = await _dbContext.Answers.Where(a => a.QuizQuestionId == id_q && a.IsCorrect).FirstOrDefaultAsync();

                if (answer != null) {
                    return Ok(new {isCorrect = answer.IsCorrect, correctAnswer = correct_answer.Id});
                }
            }

            return BadRequest();
        }


    }
}
