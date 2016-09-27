using GestorPlantillas.Entity;
using GestorPlantillas.EntityVO;

namespace GestorPlantillas.Utility
{
    public interface ITipoUtility
    {
        TipoVO convertEntity2VO(Tipo _tipo);
        Tipo convertVO2Entity(TipoVO _tipoVO);
    }
}