using GestorPlantillas.Entity;
using GestorPlantillas.EntityVO;
using System.Collections.Generic;

namespace GestorPlantillas.Utility
{
    public interface IParametroUtility
    {
        ParametroVO convertEntity2VO(Parametro _parametro);
        ICollection<ParametroVO> convertListEntity2VO(ICollection<Parametro> _parametros);
        Parametro convertVO2Entity(ParametroVO _parametroVO);
    }
}