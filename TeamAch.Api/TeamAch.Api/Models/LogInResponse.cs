using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace TeamAch.Api.Models
{
    public class LogInResponse
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string JwtToken { get; set; }

        [JsonIgnore] // refresh token is returned in http only cookie
        public string RefreshToken { get; set; }

        public LogInResponse(int id, string firstName, string lastName, string userName, string jwtToken, string refreshToken)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            Username = userName;
            JwtToken = jwtToken;
            RefreshToken = refreshToken;
        }
    }
}
