using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GestorPlantillas.EntityVO
{
    public class PlantillaVO
    {
        public int id_plantilla { get; set; }
        public String nombre { get; set; }
        public String descripcion { get; set; }
        public String owner { get; set; }
    }
}