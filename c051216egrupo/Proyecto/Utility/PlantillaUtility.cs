using GestorPlantillas.Entity;
using GestorPlantillas.EntityVO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GestorPlantillas.Utility
{
    public class PlantillaUtility : IPlantillaUtility
    {
        public virtual PlantillaVO convertEntity2VO(Plantilla _plantilla)
        {
            var _plantillaVO = new PlantillaVO();

            _plantillaVO.id_plantilla = _plantilla.id;
            _plantillaVO.nombre = _plantilla.nombre;
            _plantillaVO.descripcion = _plantilla.descripcion;
            _plantillaVO.owner = _plantilla.owner;            

            return _plantillaVO;
       
        }

        public virtual Plantilla convertVO2Entity(PlantillaVO _plantillaVO)
        {
            var _plantilla = new Plantilla();

            _plantilla.id = _plantillaVO.id_plantilla;
            _plantilla.nombre = _plantillaVO.nombre;
            _plantilla.descripcion = _plantillaVO.descripcion;
            _plantilla.owner = _plantillaVO.owner;

            return _plantilla;
            
        }
    }
}