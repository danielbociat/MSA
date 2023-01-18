namespace quizeroo.Core.Views
{
    public class QuestionView
    {
        public int id { get; set; }
        public string? question { get; set; }
        public List<AnswerView>? answers { get; set; }
    }

    public class AnswerView
    {
        public string text { get; set; }
        public int id { get; set; }

    }


}
