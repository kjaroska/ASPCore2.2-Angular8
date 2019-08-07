using System;

namespace DatingApp.API.Models.DTO
{
    internal class PhotoForReturnDto
    {
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public string PublicId { get; set; }
    }
}