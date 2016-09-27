
using GestorPlantillas.EntityVO;
using GestorPlantillas.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GestorPlantilla.Service
{
    public class PlantillaService : IPlantillaService
    {
        private IPlantillaRepository plantillaRepository;

        public PlantillaService(IPlantillaRepository _plantillaRepository)
        {
            this.plantillaRepository = _plantillaRepository;
        }

        public ICollection<PlantillaVO> lista()
        {
            return this.plantillaRepository.Lista();
        }

        public PlantillaVO get(int _id)
        {
            return this.plantillaRepository.Get(_id);
        }

        public PlantillaVO post(PlantillaVO _plantillaVO)
        {
            return this.plantillaRepository.Post(_plantillaVO);
        }

        public Boolean delete(int _id)
        {
            return this.plantillaRepository.Delete(_id);
        }

        public PlantillaVO put(PlantillaVO _plantillaVO)
        {
            return this.plantillaRepository.Put(_plantillaVO);
        }
    }
}