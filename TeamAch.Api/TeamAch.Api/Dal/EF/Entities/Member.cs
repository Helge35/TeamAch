using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TeamAch.Api.Dal.EF.Entities
{
    public class Member
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int ManagerId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        public string Phone { get; set; }
        public string IconPath { get; set; }
        public DateTime Birthday { get; set; }

        public int RoleId { get; set; }
        [ForeignKey("RoleId")]
        public Role Role { get; set; }

        public int StatusId { get; set; }
        [ForeignKey("StatusId")]
        public WorkStatus Status { get; set; }

        public List<Skill> Skills { get; set; }
        public List<Project> Projects { get; set; }
        public List<Absence> Absences { get; set; }

    }
}

