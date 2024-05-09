using BACKEND.Models;
using BACKEND.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BACKEND.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService service;
        public AuthController(IAuthService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IActionResult GetAll() 
        { 
            var data = this.service.GetAll();
            return Ok(data);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] ISPModel isp)
        {
            var res = await service.Create(isp);
            
            return Ok(res);
        }

        [HttpPost("login")]
        public async Task<IActionResult> GetLog(Login request)
        {
            var res = await service.Login(request.Username, request.Password);

            if(res.Success)
            {
                return Ok(res);
            }
            else
            {
                return BadRequest(res);
            }
        }
    }
}
