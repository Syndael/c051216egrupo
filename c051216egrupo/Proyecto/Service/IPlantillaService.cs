using System.Collections.Generic;
using GestorPlantillas.EntityVO;

namespace GestorPlantilla.Service
{
    public interface IPlantillaService
    {
        bool delete(int _id);
        PlantillaVO get(int _id);
        ICollection<PlantillaVO> lista();
        PlantillaVO post(PlantillaVO _plantillaVO);
        PlantillaVO put(PlantillaVO _plantillaVO);
    }
}