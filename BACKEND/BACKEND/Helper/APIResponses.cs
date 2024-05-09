using BACKEND.Models;

namespace BACKEND.Helper
{
    public class Responses<T>
    {
        public int ResponseVode { get; set; }
        public string? Result { get; set; }
        public string? Message { get; set; }
        public bool Success { get; set; }
        public T? Data { get; set; }
        
    }
}
