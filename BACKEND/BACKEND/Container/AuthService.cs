using BACKEND.Data;
using BACKEND.Helper;
using BACKEND.Models;
using BACKEND.Services;

namespace BACKEND.Container
{
    public class AuthService: IAuthService
    {
        private readonly DataContext context;
        public AuthService(DataContext context) { 
            
            this.context = context;
        }

        public async Task<Responses> Create(ISPModel data)
        {
            try
            {
                await context.Isps.AddAsync(data);
                await context.SaveChangesAsync();

                return new Responses { Success=true, Message= "Employee created successfully" };
            }
            catch (Exception ex)
            {
                return new Responses { Success = false, Message = $"Failed to create employee {ex.Message}" };
            }
        }

        public List<ISPModel> GetAll()
        {
            return this.context.Isps.ToList();
        }
    }
}
