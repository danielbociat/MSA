namespace quizeroo.Core.Views
{
    public class QuestionView
    {
        public int id { get; set; }
        public string? question { get; set; }
        public List<string>? answers { get; set; }
        public List<int>? answers_id { get; set; }
    }


}
