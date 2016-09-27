using GestorPlantillas.EntityVO;
using GestorPlantillas.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GestorPlantillas.Service
{
    public class TipoService : ITipoService
    {
        private ITipoRepository tipoRepository;

        public TipoService(TipoRepository _tipoRepository)
        {
            this.tipoRepository = _tipoRepository;
        }

        public ICollection<TipoVO> lista()
        {
            return this.tipoRepository.Lista();
        }

        public TipoVO get(int _id)
        {
            return this.tipoRepository.Get(_id);
        }

        public Boolean post(TipoVO _tipoVO)
        {
            return this.tipoRepository.Post(_tipoVO);
        }

        public Boolean delete(int _id)
        {
            return this.tipoRepository.Delete(_id);
        }

        public Boolean put(TipoVO _tipoVO)
        {
            return this.tipoRepository.Put(_tipoVO);
        }
    }
}