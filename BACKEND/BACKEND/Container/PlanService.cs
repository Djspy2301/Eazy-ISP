using BACKEND.Data;
using BACKEND.Helper;
using BACKEND.Models;
using BACKEND.Services;
using Microsoft.EntityFrameworkCore;

namespace BACKEND.Container
{
    public class PlanService : IPlanService
    {
        private readonly DataContext context;
        public PlanService(DataContext context) 
        {
            this.context = context;    
        }
        public async Task<Responses<PlanModel>> CreatePlan(PlanModel plan)
        {
            try
            {
                context.Plan.Add(plan);
                await context.SaveChangesAsync();
                return new Responses<PlanModel> { Success = true, Message = "Plan created successfully", Data = plan };
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error creating plan: {ex.Message}");
                return new Responses<PlanModel> { Success = false, Message = $"Failed to create plan: {ex.Message}" };
            }
        }

        public async Task<Responses<List<PlanModel>>> GetPlanById(long id)
        {
            try
            {
                string admin;
                var user = await context.Members.FindAsync(id);
                if (user == null)
                {
                    return new Responses<List<PlanModel>> { Success = false, Message = "User not found" };
                }
                else {
                   admin = user.Admin;
                }

                var plans = await context.Plan.Where(p => p.Admin == admin).ToListAsync();
                if (plans != null && plans.Any())
                {
                    return new Responses<List<PlanModel>> { Success = true, Message = "Plans found", Data = plans };
                }
                else
                {
                    return new Responses<List<PlanModel>> { Success = false, Message = "No plans found for this user" };
                }
            }
            catch (Exception ex)
            {
                return new Responses<List<PlanModel>> { Success = false, Message = $"Error: {ex.Message}" };
            }
        }

        public async Task<List<PlanModel>> GetPlans()
        {
            try
            {
                var plans = await context.Plan.ToListAsync();
                return plans;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching plans: {ex.Message}");
                return null;
            }
        }
    }
}
