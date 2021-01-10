using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamAch.Api.Dal.EF;

namespace TeamAch.Api.Dal
{
    public class RepositoryBase
    {
        public  IMapper Mapper { get;  }
        public TeamAchDbContext DbContext { get; }

        public RepositoryBase(TeamAchDbContext dbContect, IMapper mapper)
        {
            Mapper = mapper;
            DbContext = dbContect;
        }
    }
}
