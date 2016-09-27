using System.Collections.Generic;
using GestorPlantillas.EntityVO;

namespace GestorPlantillas.Repository
{
    public interface ITipoRepository
    {
        bool Delete(int _id);
        TipoVO Get(int _id);
        ICollection<TipoVO> Lista();
        bool Post(TipoVO _tipoVO);
        bool Put(TipoVO _tipoVO);
    }
}