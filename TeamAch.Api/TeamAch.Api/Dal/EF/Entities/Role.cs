﻿using System.ComponentModel.DataAnnotations;

namespace TeamAch.Api.Dal.EF.Entities
{
    public class Role
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
    }
}
