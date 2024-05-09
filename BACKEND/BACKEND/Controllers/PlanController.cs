using BACKEND.Container;
using BACKEND.Helper;
using BACKEND.Models;
using BACKEND.Services;
using Microsoft.AspNetCore.Mvc;

namespace BACKEND.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlanController:ControllerBase
    {
        private readonly IPlanService service;

        public PlanController(IPlanService service)
        {
            this.service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetPlans()
        {
            var plans = await service.GetPlans();
            if (plans == null)
            {
                return NotFound(new Responses<PlanModel> { Success = false, Message = "Failed to fetch plans" });
            }
            return Ok(plans);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPlanById(long id)
        {
            var response = await service.GetPlanById(id);
            if (response.Success)
            {
                return Ok(response);
            }
            else
            {
                return NotFound(response);
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreatePlan([FromBody] PlanModel plan)
        {
            if (plan == null)
            {
                return BadRequest(new Responses<PlanModel> { Success = false, Message = "Plan data is required" });
            }

            var response = await service.CreatePlan(plan);
            if (!response.Success)
            {
                return StatusCode(500, response);
            }

            return CreatedAtAction(nameof(GetPlans), new { id = plan.Id }, response);
        }
    }
}
