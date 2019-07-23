using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Persistance
{
    public class DataContext : DbContext
    {
        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options) {}
    }
}