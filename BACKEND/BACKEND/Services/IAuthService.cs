using BACKEND.Helper;
using BACKEND.Models;

namespace BACKEND.Services
{
    public interface IAuthService
    {
        List<ISPModel> GetAll();
        Task<Responses<object>> Login(string username, string password);

        Task<Responses<ISPModel>> Create(ISPModel data);
    }
}
