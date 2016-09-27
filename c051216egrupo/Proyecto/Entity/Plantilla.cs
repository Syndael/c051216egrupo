using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GestorPlantillas.Entity
{
    public class Plantilla
    {
        public int id { get; set; }
        public String nombre { get; set; }
        public String descripcion { get; set; }
        public String owner { get; set; }
    }
}