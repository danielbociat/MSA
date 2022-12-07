using Microsoft.EntityFrameworkCore;
using quizeroo.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quizeroo.Core.Database
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
