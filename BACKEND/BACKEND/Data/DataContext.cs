using System;
using System.Collections.Generic;
using BACKEND;
using BACKEND.Models;
using Microsoft.EntityFrameworkCore;
namespace BACKEND.Data;

public class DataContext : DbContext
{

    public DataContext(DbContextOptions<DataContext> options)
        : base(options)
    {
    }

    public DbSet<ISPModel> Isps => Set<ISPModel>();
}
