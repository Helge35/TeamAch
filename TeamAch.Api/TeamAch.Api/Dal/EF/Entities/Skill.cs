using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TeamAch.Api.Dal.EF.Entities
{
    public class Skill
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsHard { get; set; }

        public List<Member> Members { get; set; }
        public List<Project> Projects { get; set; }
    }
}