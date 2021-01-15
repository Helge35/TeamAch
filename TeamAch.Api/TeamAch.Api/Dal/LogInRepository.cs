﻿using AutoMapper;
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

        internal User GetUser(string username)
        {
            return DbContext.Users.SingleOrDefault(x => x.Username == username.Trim().ToLower());
        }
    }
}
