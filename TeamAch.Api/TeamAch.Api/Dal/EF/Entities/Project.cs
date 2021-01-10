using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TeamAch.Api.Dal.EF.Entities
{
    public class Project
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Alias { get; set; }
        public string Color { get; set; }
        public List<Skill>  Skills { get; set; }
        public List<Member> Team { get; set; }
    }
}