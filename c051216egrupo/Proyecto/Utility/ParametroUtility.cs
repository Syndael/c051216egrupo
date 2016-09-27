using GestorPlantillas.Entity;
using GestorPlantillas.EntityVO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GestorPlantillas.Utility
{
    public class ParametroUtility : IParametroUtility
    {
        public ParametroVO convertEntity2VO(Parametro _parametro)
        {
            var _parametroVO = new ParametroVO();

            _parametroVO.id_parametro = _parametro.id_parametro;
            _parametroVO.plantillaID = _parametro.plantillaID;
            _parametroVO.tipoID = _parametro.tipoID;
            _parametroVO.parametro = _parametro.parametro;
            _parametroVO.isText = _parametro.isText;


            return _parametroVO;
        }

        public Parametro convertVO2Entity(ParametroVO _parametroVO)
        {
            var _parametro = new Parametro();

            _parametro.id_parametro = _parametroVO.id_parametro;
            _parametro.plantillaID = _parametroVO.plantillaID;
            _parametro.tipoID = _parametroVO.tipoID;
            _parametro.parametro = _parametroVO.parametro;
            _parametro.isText = _parametroVO.isText;

            return _parametro;
            
        }
    }
}