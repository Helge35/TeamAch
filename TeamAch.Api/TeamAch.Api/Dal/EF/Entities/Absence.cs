using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TeamAch.Api.Dal.EF.Entities
{
    public class Absence
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int MemberId { get; set; }
        public DateTime From { get; set; }
        public DateTime To { get; set; }
    }
}