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
    public DbSet<MemberModel> Members => Set<MemberModel>();
    public DbSet<PlanModel> Plan => Set<PlanModel>();
}
