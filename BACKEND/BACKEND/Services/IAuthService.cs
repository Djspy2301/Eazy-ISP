using BACKEND.Helper;
using BACKEND.Models;

namespace BACKEND.Services
{
    public interface IAuthService
    {
        List<ISPModel> GetAll();

        Task<Responses> Create(ISPModel data);
    }
}
