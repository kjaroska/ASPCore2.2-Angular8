using AutoMapper;
using DatingApp.API.Models;
using DatingApp.API.Models.DTOs;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListsDto>();
            CreateMap<User, UserForDetailedDto>();
            CreateMap<Photo, PhotosForDetailedDto>();
        }
    }
}