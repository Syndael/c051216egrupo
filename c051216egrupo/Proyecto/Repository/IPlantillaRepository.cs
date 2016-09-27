using System.Collections.Generic;
using GestorPlantillas.EntityVO;

namespace GestorPlantillas.Repository
{
    public interface IPlantillaRepository
    {
        bool Delete(int _id);
        PlantillaVO Get(int _id);
        ICollection<PlantillaVO> Lista();
        PlantillaVO Post(PlantillaVO _plantillaVO);
        PlantillaVO Put(PlantillaVO _plantillaVO);
    }
}