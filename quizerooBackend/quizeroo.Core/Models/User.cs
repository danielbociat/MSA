using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quizeroo.Core.Models
{
    public class User
    {
        public int Id { get; set; }
        public DateTime CreatedTimeUtc { get; set; }
        public DateTime? UpdatedTimeUtc { get; set; }
        public string? Username { get; set; }
    }
}
