using BACKEND.Data;
using BACKEND.Helper;
using BACKEND.Models;
using BACKEND.Services;
using Microsoft.EntityFrameworkCore;

namespace BACKEND.Container
{
    public class MemberService: IMemberService
    {
        private readonly DataContext context;
        public MemberService(DataContext context) 
        { 
            this.context = context;
        }

        public async Task<Responses<MemberModel>> Create(MemberModel member)
        {
            try
            {
                await context.Members.AddAsync(member);
                await context.SaveChangesAsync();
                return new Responses<MemberModel> {

                    ResponseVode = 0,
                    Result = "Success",
                    Message = "Member added successfully",
                    Success = true
                };
            }catch (Exception ex)
            {
                return new Responses<MemberModel> {
                    ResponseVode = -1,
                    Result = null,
                    Message = $"Error: {ex.Message}",
                    Success = false
                };
            }
        }

        public async Task<List<MemberModel>> GetAll()
        {
            try
            {
                var members = await context.Members.ToListAsync();

                return members;
            }
            catch (Exception ex)
            {
                throw new Exception("Error occurred while fetching all members.", ex);
            }
        }
    }
}
