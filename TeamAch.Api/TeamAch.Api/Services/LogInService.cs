using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using TeamAch.Api.Dal;
using TeamAch.Api.Dal.EF.Entities;
using TeamAch.Api.Models;

namespace TeamAch.Api.Services
{
    public class LogInService
    {
        private readonly string _secretKey;
        private readonly LogInRepository _repository;
        public LogInService(LogInRepository repository, IConfiguration configuration)
        {
            _repository = repository;
            _secretKey = configuration.GetSection("AppSettings:Secret").Value;
        }

        public LogInResponse Authenticate(LogInRequest model, string ipAddress)
        {
            var user = _repository.GetUser(model.Username, model.Password);
            if (user == null) return null;

            // authentication successful so generate jwt and refresh tokens
            var jwtToken = GenerateJwtToken(user.Id);
            var refreshToken = GenerateRefreshToken(ipAddress);

            // save refresh token
            user.RefreshTokens.Add(refreshToken);
            _repository.UpdateUserToken(user);

            return new LogInResponse(user.Id,user.FirstName,user.LastName, user.Username, jwtToken, refreshToken.Token);
        }

        public LogInResponse RefreshToken(string token, string ipAddress)
        {
            var user = _repository.GetUserByToken(token); 
            if (user == null) return null;

            var refreshToken = user.RefreshTokens.Single(x => x.Token == token);

            // return null if token is no longer active
            if (!refreshToken.IsActive) return null;

            // replace old refresh token with a new one and save
            var newRefreshToken = GenerateRefreshToken(ipAddress);
            refreshToken.Revoked = DateTime.UtcNow;
            refreshToken.RevokedByIp = ipAddress;
            refreshToken.ReplacedByToken = newRefreshToken.Token;
            user.RefreshTokens.Add(newRefreshToken);
            _repository.UpdateUserToken(user);

            // generate new jwt
            var jwtToken = GenerateJwtToken(user.Id);

            return new LogInResponse(user.Id, user.FirstName, user.LastName, user.Username, jwtToken, refreshToken.Token);
        }

        internal List<RefreshToken> GetUserRefreshTokensById(int id)
        {
            return _repository.GetUserRefreshTokensById(id);
        }

        public bool RevokeToken(string token, string ipAddress)
        {
            var user = _repository.GetUserByToken(token);
            if (user == null) return false;

            var refreshToken = user.RefreshTokens.Single(x => x.Token == token);

            // return false if token is not active
            if (!refreshToken.IsActive) return false;

            // revoke token and save
            refreshToken.Revoked = DateTime.UtcNow;
            refreshToken.RevokedByIp = ipAddress;
            _repository.UpdateUserToken(user);

            return true;
        }


        private string GenerateJwtToken(int userId)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_secretKey);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, userId.ToString())
                }),
                Expires = DateTime.UtcNow.AddMinutes(15),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        private RefreshToken GenerateRefreshToken(string ipAddress)
        {
            using (var rngCryptoServiceProvider = new RNGCryptoServiceProvider())
            {
                var randomBytes = new byte[64];
                rngCryptoServiceProvider.GetBytes(randomBytes);
                return new RefreshToken
                {
                    Token = Convert.ToBase64String(randomBytes),
                    Expires = DateTime.UtcNow.AddDays(7),
                    Created = DateTime.UtcNow,
                    CreatedByIp = ipAddress
                };
            }
        }
    }
}
