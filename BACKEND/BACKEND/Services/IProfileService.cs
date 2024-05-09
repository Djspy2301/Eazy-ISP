using BACKEND.Helper;
using BACKEND.Models;

namespace BACKEND.Services
{
    public interface IProfileService
    {
        Task<Responses<object>> Get(long id);
    }
}
