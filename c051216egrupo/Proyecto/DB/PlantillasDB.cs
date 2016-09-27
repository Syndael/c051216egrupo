using GestorPlantillas.Entity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GestorPlantillas
{
    public class PlantillasDB : DbContext
    {
        public DbSet<Plantilla> Plantillas { get; set; }
        public DbSet<Parametro> Parametros { get; set; }
        public DbSet<Tipo> Tipo { get; set; }

        public PlantillasDB() : base("PlantillasDB")
        {
        }

    }
}
