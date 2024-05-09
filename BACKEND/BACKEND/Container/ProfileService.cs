using BACKEND.Data;
using BACKEND.Helper;
using BACKEND.Models;
using BACKEND.Services;
using Microsoft.EntityFrameworkCore;

namespace BACKEND.Container
{
    public class ProfileService: IProfileService
    {
        private readonly DataContext context;
        public ProfileService(DataContext context) { 
            this.context = context;
        }

        public async Task<Responses<object>> Get(long id)
        {
            try
            {
                var user = await context.Isps.FirstOrDefaultAsync(u => u.Id == id);
                if (user != null)
                {
                    return new Responses<object> { Success = true, Message = "Profile data fetched", Data = user };
                }
                else
                {
                    var member = await context.Members.FirstOrDefaultAsync(u => u.Id == id);
                    if (member != null)
                    {
                        return new Responses<object> { Success = true, Message = "Profile data fetched", Data = member };
                    }
                    else
                    {
                        return new Responses<object> { Success = false, Message = "User not found" };
                    }
                }
            }
            catch (Exception ex)
            {
                return new Responses<object> { Success = false, Message = $"An error occurred: {ex.Message}" };
            }
        }
    }
}
