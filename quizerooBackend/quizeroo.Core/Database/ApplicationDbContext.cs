using Microsoft.EntityFrameworkCore;
using quizeroo.Core.Models;

namespace quizeroo.Core.Database
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<Quiz> Quizes { get; set; }
        public DbSet<QuizQuestion> QuizQuestions { get; set; }
        public DbSet<User> Users { get; set; } 
        public DbSet<Answer> Answers { get; set; }

    }
}
