using System.ComponentModel.DataAnnotations;

namespace BACKEND.Models
{
    public class ReqPlan
    {
        [Key]
        public long? Id { get; set; }
        [Required]
        public string? Admin { get; set; }
        [Required]
        public string? Plan { get; set; }
        [Required]
        [MaxLength(100)]
        public string? Description { get; set; }
        [Required]
        public int Due { get; set; }

        [Required]
        public string? Speed { get; set; }
        [Required]
        public float Price { get; set; }
    }
}
