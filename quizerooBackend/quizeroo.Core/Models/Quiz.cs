using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quizeroo.Core.Models
{
    public class Quiz
    {
        public int Id { get; set; }
        public string? QuizTitle { get; set; }
        public int UserId { get; set; }
        public User? User { get; set; }
    }
}
