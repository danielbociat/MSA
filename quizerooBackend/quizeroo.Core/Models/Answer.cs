using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quizeroo.Core.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public int QuizQuestionId { get; set; }
        public QuizQuestion? QuizQuestion { get; set; }
        public string Text { get; set; }
        public bool IsCorrect { get; set; }
    }
}
