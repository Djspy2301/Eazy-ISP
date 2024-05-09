using BACKEND.Helper;
using System.ComponentModel.DataAnnotations;

namespace BACKEND.Models
{
    public class MemberModel
    {
        [Key]
        public long? Id { get; set; }
        [Required]
        [MaxLength(35)]
        public string? Name { get; set; }
        [Required]
        [MaxLength(35)]
        public string? Username { get; set; }
        [Required]
        [MaxLength(10)]
        public string? Phone { get; set; }
        [Required]
        public string? Admin { get; set; }
        public string? Plan { get; set; }
        public string? Due { get; set; }
        [MinLength(6)]
        public string? Password { get; set; }
        [Required]
        public bool? IsAdmin { get; set; }
    }
}
