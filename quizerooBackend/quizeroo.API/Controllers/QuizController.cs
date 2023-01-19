using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using quizeroo.API.requests;
using quizeroo.Core.Database;
using quizeroo.Core.Models;
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
        public async Task<IActionResult> GetById(int id)
        {
            var quiz = await _dbContext.Quizes.Where(q => q.Id == id).FirstAsync();
            var questions = await _dbContext.QuizQuestions.Where(q => q.QuizId == quiz.Id).Select(q => new QuestionView{ 
                id = q.Id,
                question = q.Question,
                answers = (List<AnswerView>) q.Answers.Select(a =>new AnswerView
                {
                    text = a.Text,
                    id = a.Id,
                }).ToList().Shuffle(),
            }).ToListAsync();

            return Ok(new {title = quiz.QuizTitle, quiz_questions = questions});
        }

        // POST api/<QuizController>
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> PostQuiz(AddQuizRequest quizData)
        {
            var user_id = Int32.Parse(HttpContext.User.FindFirstValue("userId"));
            var user = await _dbContext.Users.Where(u => u.Id == user_id).FirstOrDefaultAsync();

            if (user != null)
            {
                var quiz = new Quiz() { QuizTitle = quizData.Title, User = user, UserId = user_id };
                await _dbContext.Quizes.AddAsync(quiz);

                var questions = quizData.Questions.Select(q => new QuizQuestion()
                {
                    Question = q.QuestionText,
                    Quiz = quiz,
                    QuizId = quiz.Id,
                    Answers = q.Answers.Select(a => new Answer { Text = a.AnswerText, IsCorrect = a.isCorrect }).ToList()
                }).ToList();

                await _dbContext.QuizQuestions.AddRangeAsync(questions);
                await _dbContext.SaveChangesAsync();

                return Ok();
            }

            return BadRequest();
        }

    }

    static class MyExtensions
    {
        public static IList<T> Shuffle<T>(this IList<T> list)
        {
            int n = list.Count;
            Random _random = new Random();
            while (n > 1)
            {
                n--;
                int k = _random.Next(n + 1);
                T value = list[k];
                list[k] = list[n];
                list[n] = value;
            }

            return list;
        }
    }
}

