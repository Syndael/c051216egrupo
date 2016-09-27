using GestorPlantillas.Entity;
using GestorPlantillas.EntityVO;

namespace GestorPlantillas.Utility
{
    public interface IPlantillaUtility
    {
        PlantillaVO convertEntity2VO(Plantilla _plantilla);
        Plantilla convertVO2Entity(PlantillaVO _plantillaVO);
    }
}