using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quizeroo.Core.Models
{
    public class QuizQuestion
    {
        public int Id { get; set; }
        public string? Question { get; set; }
        public List<Answer>? Answers { get; set; }
        public int QuizId { get; set; }
        public Quiz? Quiz { get; set; }
    }
}
