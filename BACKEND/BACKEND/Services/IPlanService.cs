using BACKEND.Data;
using BACKEND.Helper;
using BACKEND.Models;

namespace BACKEND.Services
{
    public interface IPlanService
    {
        Task<List<PlanModel>> GetPlans();
        Task<Responses<List<PlanModel>>> GetPlanById(long id);
        Task<Responses<PlanModel>> CreatePlan(PlanModel plan);
    }
}
