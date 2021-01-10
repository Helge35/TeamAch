using Microsoft.EntityFrameworkCore;
using TeamAch.Api.Dal.EF.Entities;

namespace TeamAch.Api.Dal.EF
{
    public class TeamAchDbContext : DbContext
    {
        public TeamAchDbContext(DbContextOptions<TeamAchDbContext> options) : base(options)
        {
        }

        public DbSet<Member> Members { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<WorkStatus> Statuses { get; set; }
        public DbSet<Skill> Skills { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Absence> Absences { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
