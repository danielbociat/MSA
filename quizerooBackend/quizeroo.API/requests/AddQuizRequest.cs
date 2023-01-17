namespace quizeroo.API.requests
{
    public class AddQuizRequest
    {
        public string Title { get; set; }
        public List<AddQuizQuestion> Questions { get; set; }
    }

    public class AddQuizQuestion
    {
        public string QuestionText { get; set; }
        public List<AddAnswer> Answers { get; set; }
    }

    public class AddAnswer
    {
        public string AnswerText { get; set; }
        public bool isCorrect { get; set; }
    }
}
