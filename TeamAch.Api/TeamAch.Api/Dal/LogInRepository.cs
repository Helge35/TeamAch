using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamAch.Api.Dal.EF;
using TeamAch.Api.Dal.EF.Entities;

namespace TeamAch.Api.Dal
{
    public class LogInRepository : RepositoryBase
    {
        public LogInRepository(TeamAchDbContext dbContect, IMapper mapper) : base(dbContect, mapper)
        { }

        internal User GetUser(string username)
        {
            return DbContext.Users.FirstOrDefault(x => x.Username == username.Trim().ToLower());
        }

        internal bool AddNewUser(string userName, string password)
        {
            User user = GetUser(userName);
            if (user != null)
                return false;

            user = new User { Username = userName.Trim().ToLower(), Password = password };
            DbContext.Users.Add(user);
            return DbContext.SaveChanges() > 0;
        }
    }
}
