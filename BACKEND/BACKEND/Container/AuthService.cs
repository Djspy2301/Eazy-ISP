using BACKEND.Data;
using BACKEND.Helper;
using BACKEND.Models;
using BACKEND.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace BACKEND.Container
{
    public class AuthService: IAuthService
    {
        private readonly DataContext context;
        private readonly IHttpContextAccessor httpContextAccessor;
        public AuthService(DataContext context, IHttpContextAccessor httpContextAccessor) { 
            
            this.context = context;
            this.httpContextAccessor = httpContextAccessor;
        }

        public async Task<Responses<ISPModel>> Create(ISPModel data)
        {
            try
            {
                await context.Isps.AddAsync(data);
                await context.SaveChangesAsync();

                return new Responses<ISPModel> { Success=true, Message= "Employee created successfully" };
            }
            catch (Exception ex)
            {
                return new Responses<ISPModel> { Success = false, Message = $"Failed to create employee {ex.Message}" };
            }
        }

        public List<ISPModel> GetAll()
        {
            return this.context.Isps.ToList();
        }

        public async Task<Responses<object>> Login(string username, string password)
        {
            // Check if user exists in ISPModel
            var ispUser = await context.Isps.FirstOrDefaultAsync(u => u.Username == username);
            if (ispUser != null && ispUser.Password == password)
            {
                // If user exists in ISPModel and password matches, set session and return success
                
                return new Responses<object> { Success = true, Message = "Login successful", Data = ispUser };
            }

            // If user is not found in ISPModel or password doesn't match, check MemberModel
            var memberUser = await context.Members.FirstOrDefaultAsync(u => u.Username == username);
            if (memberUser != null && memberUser.Password == password)
            {
                
                return new Responses<object> { Success = true, Message = "Login successful", Data = memberUser };
            }

            // If user is not found in either ISPModel or MemberModel, return user not found message
            return new Responses<object> { Success = false, Message = "User not found or incorrect password" };
        }

    }
}
