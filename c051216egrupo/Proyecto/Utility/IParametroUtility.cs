using GestorPlantillas.Entity;
using GestorPlantillas.EntityVO;

namespace GestorPlantillas.Utility
{
    public interface IParametroUtility
    {
        ParametroVO convertEntity2VO(Parametro _parametro);
        Parametro convertVO2Entity(ParametroVO _parametroVO);
    }
}