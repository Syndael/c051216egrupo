using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace GestorPlantillas.Entity
{
    public class Parametro
    {
        public int id { get; set; }
        public int plantillaID { get; set; }
        public int tipoID { get; set; }
        public int parametro { get; set; }
        public bool isText{ get; set; }

        [ForeignKey("plantillaID")]
        public virtual Plantilla Plantilla { get; set; }
        [ForeignKey("tipoID")]
        public virtual Tipo Tipo { get; set; }

        public Parametro(int _plantillaID, int _tipoID, int _parametro)
        {
            this.plantillaID = _plantillaID;
            this.tipoID = _tipoID;
            this.parametro = _parametro;

        }

        public Parametro()
        {
        }

    }
}