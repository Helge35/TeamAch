using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamAch.Api.Dal.EF;
using TeamAch.Api.Dal.EF.Entities;

namespace TeamAch.Api.Dal
{
    public class LogInRepository: RepositoryBase
    {
        public LogInRepository(TeamAchDbContext dbContect, IMapper mapper) : base(dbContect, mapper)
        { }

        internal User GetUser(string username, string password)
        {
            return DbContext.Users.SingleOrDefault(x => x.Username == username.Trim().ToLower() && x.Password == password.Trim());
        }

        internal void UpdateUserToken(User user)
        {
            DbContext.SaveChanges();
        }

        internal User GetUserByToken(string token)
        {
            return DbContext.Users.SingleOrDefault(u => u.RefreshTokens.Any(t => t.Token == token));
        }

        internal List<RefreshToken> GetUserRefreshTokensById(int id)
        {
            var user = DbContext.Users.FirstOrDefault(x => x.Id == id) ;
            return user != null ? user.RefreshTokens : null;
        }
    }
}
