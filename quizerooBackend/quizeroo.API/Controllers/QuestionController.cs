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
        [HttpPost("{id}/{id_a}")]
        [Authorize]
        public async Task<IActionResult> PostQuiz(int id, int id_a)
        {
            var user_id = Int32.Parse(HttpContext.User.FindFirstValue("userId"));
            var user = await _dbContext.Users.Where(u => u.Id == user_id).FirstOrDefaultAsync();

            if (user != null)
            {
                var answer = await _dbContext.Answers.Where(a => a.QuizQuestionId == id && a.Id == id_a).FirstOrDefaultAsync();

                if (answer != null) {
                    return Ok(answer.IsCorrect);
                }
            }

            return BadRequest();
        }


    }
}
