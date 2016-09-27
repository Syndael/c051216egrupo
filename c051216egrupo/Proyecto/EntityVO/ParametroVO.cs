using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GestorPlantillas.Entity;

namespace GestorPlantillas.EntityVO
{
    public class ParametroVO
    {
        public int id_parametro { get; set; }
        public int plantillaID { get; set; }
        public Plantilla Plantilla { get; set; }
        public int tipoID { get; set; }
        public Tipo Tipo{get; set;}
        public String parametro { get; set; }
        public bool isText { get; set; }

        public ParametroVO(int _plantillaID, int _tipoID, String _parametro)
        {
            this.plantillaID = _plantillaID;
            this.tipoID = _tipoID;
            this.parametro = _parametro;

        }

        public ParametroVO()
        {

        }
    }
}