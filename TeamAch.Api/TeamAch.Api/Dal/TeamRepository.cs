using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamAch.Api.Dal.EF;
using TeamAch.Api.Dal.EF.Entities;

namespace TeamAch.Api.Dal
{
    public class TeamRepository : RepositoryBase
    {
        public TeamRepository(TeamAchDbContext dbContect, IMapper mapper) : base(dbContect, mapper)
        { }

        public IEnumerable<Member> GetTeamsByManager(int id)
        {
            return DbContext.Members.Where(x => x.ManagerId == id);
        }

        public async Task<bool?> AddNewMember(Member member)
        {
            if (DbContext.Members.FirstOrDefault(x=>x.Email.ToLower().Trim() == member.Email.ToLower().Trim()) != null)
                return null;

            DbContext.Members.Add(member);
            return await DbContext.SaveChangesAsync() > 0;
        }
    }
}
