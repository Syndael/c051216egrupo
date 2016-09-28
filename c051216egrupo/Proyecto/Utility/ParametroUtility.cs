using GestorPlantillas.Entity;
using GestorPlantillas.EntityVO;
using System;
using System.Collections;
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

            _parametroVO.id_parametro = _parametro.id;
            _parametroVO.plantillaID = _parametro.plantillaID;
            _parametroVO.tipoID = _parametro.tipoID;
            _parametroVO.parametro = _parametro.parametro;
            _parametroVO.isText = _parametro.isText;


            return _parametroVO;
        }

        public ICollection<ParametroVO> convertListEntity2VO(ICollection<Parametro> _parametros)
        {
            ICollection<ParametroVO> paramsVO= new List<ParametroVO>();
            foreach(Parametro parAux in _parametros)
            {
                var parAuxVO = new ParametroVO();
                parAuxVO.id_parametro = parAux.id;
                parAuxVO.plantillaID = parAux.plantillaID;
                parAuxVO.tipoID = parAux.tipoID;
                parAuxVO.parametro = parAux.parametro;
                parAuxVO.isText = parAux.isText;
                paramsVO.Add(parAuxVO);
            }
            return paramsVO;
        }

        public Parametro convertVO2Entity(ParametroVO _parametroVO)
        {
            var _parametro = new Parametro();

            _parametro.id = _parametroVO.id_parametro;
            _parametro.plantillaID = _parametroVO.plantillaID;
            _parametro.tipoID = _parametroVO.tipoID;
            _parametro.parametro = _parametroVO.parametro;
            _parametro.isText = _parametroVO.isText;

            return _parametro;

        }
    }
}