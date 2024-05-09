using BACKEND.Helper;
using System.ComponentModel.DataAnnotations;

namespace BACKEND.Models
{
    public class ISPModel
    {
        public long? Id { get; set; }
        [Required]
        [MaxLength(30)]
        public string? Brand { get; set; }
        [Required]
        [MaxLength(15)]
        public string? Username { get; set; }
        [Required]
        [MaxLength(35)]
        public string? Name { get; set; }
        [Required]
        [MaxLength(35)]
        public string? Email { get; set; }
        [Required]
        [MaxLength(10)]
        public string? Phone { get; set; }
        [Required]
        [MinLength(6)]
        public string? Password { get; set; }

        public bool IsAdmin { get; set; }
    }
}
