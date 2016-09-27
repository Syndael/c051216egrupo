using GestorPlantillas.Entity;
using GestorPlantillas.EntityVO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GestorPlantillas.Utility
{
    public class TipoUtility : ITipoUtility
    {
        public TipoVO convertEntity2VO(Tipo _tipo)
        {
            var _tipoVO = new TipoVO();

            _tipoVO.id_tipo = _tipo.id;
            _tipoVO.tipo = _tipo.tipo;

            return _tipoVO;
       
        }

        public Tipo convertVO2Entity(TipoVO _tipoVO)
        {
            var _tipo = new Tipo();

            _tipo.id = _tipoVO.id_tipo;
            _tipo.tipo = _tipoVO.tipo;

            return _tipo;
        }
    }
}