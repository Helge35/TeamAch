using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using TeamAch.Api.Dal;
using TeamAch.Api.Dal.EF;
using TeamAch.Api.Models;

namespace TeamAch.Api.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        SigningCredentials _signingCredentials;
        LogInRepository _logInRepository;
        TeamRepository _teamRepository;
        public AuthController(IConfiguration configuration, LogInRepository logInRepository, TeamRepository teamRepository)
        {
            _logInRepository = logInRepository;
            _teamRepository = teamRepository;

            var sectretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration.GetSection("AppSettings:Secret").Value));
            _signingCredentials = new SigningCredentials(sectretKey, SecurityAlgorithms.HmacSha256Signature);
        }

        [HttpPost, Route("login")]
        public IActionResult Login([FromBody] LoginModel userModel)
        {
            if (!ModelState.IsValid || userModel == null)
                return BadRequest("Invalid Client");

            var user = _logInRepository.GetUser(userModel.Username);

            if (user != null && PasswordHasher.VerifyHashedPassword(user.Password, userModel.Password))
            {
                var member = _teamRepository.GetMember(user.Id);
                if (member == null)
                    return NotFound();

                var claimsList = new List<Claim>
                {
                    new Claim(ClaimTypes.SerialNumber, user.Id.ToString()),
                    new Claim(ClaimTypes.Name, user.Username),
                    new Claim(ClaimTypes.GivenName, member.Name),
                };
                var tokenOptions = new JwtSecurityToken(
                    //issuer: "http://localhost:64714",
                    //audience: "http://localhost:64714",
                    claims: claimsList,
                    expires: DateTime.Now.AddYears(1),
                    signingCredentials: _signingCredentials
                    );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
                return Ok(new { Token = tokenString });
            }

            return Unauthorized();
        }
    }
}
