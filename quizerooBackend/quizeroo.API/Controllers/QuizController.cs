using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using quizeroo.Core.Database;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace quizeroo.API.Controllers
{
    [Route("api/[controller]")]
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
        public async Task<IActionResult> Get([FromBody] string token) /// TODO: Validate token
        {
            var quizes = await _dbContext.Quizes.ToListAsync();

            return Ok(quizes);
        }

        // GET api/<QuizController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id, [FromBody] string token) /// TODO: Validate token
        {
            var quiz = await _dbContext.Quizes.Where(q => q.Id == id).ToListAsync();

            return Ok(quiz);
        }

        // POST api/<QuizController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<QuizController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<QuizController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
