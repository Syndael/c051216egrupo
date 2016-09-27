using System.Collections.Generic;
using GestorPlantillas.EntityVO;

namespace GestorPlantillas.Repository
{
    public interface IPlantillaRepository
    {
        bool Delete(int _id);
        PlantillaVO Get(int _id);
        ICollection<PlantillaVO> Lista();
        bool Post(PlantillaVO _plantillaVO);
        bool Put(PlantillaVO _plantillaVO);
    }
}