using System;
using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Models.DTOs
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(16, MinimumLength = 4, ErrorMessage = "Password too long, min 4 characters.")]
        public string Password { get; set; }
        public string Gender { get; set; }
        public string KnownAs { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }


        public UserForRegisterDto()
        {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }
    }
}