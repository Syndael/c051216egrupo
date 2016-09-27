using System.Collections.Generic;
using GestorPlantillas.EntityVO;

namespace GestorPlantilla.Service
{
    public interface IPlantillaService
    {
        bool delete(int _id);
        PlantillaVO get(int _id);
        ICollection<PlantillaVO> lista();
        bool post(PlantillaVO _plantillaVO);
        bool put(PlantillaVO _plantillaVO);
    }
}