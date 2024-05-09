using BACKEND.Helper;
using BACKEND.Models;

namespace BACKEND.Services
{
    public interface IMemberService
    {
        Task<List<MemberModel>> GetAll();
        Task<Responses<MemberModel>> Create(MemberModel member);
    }
}
