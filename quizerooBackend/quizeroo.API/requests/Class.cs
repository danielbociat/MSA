using quizeroo.Core.Models;

namespace quizeroo.API.requests
{
    public class AddUserRequest
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string? Password { get; set; }
    }
}