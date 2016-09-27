using System.Collections.Generic;
using GestorPlantillas.EntityVO;

namespace GestorPlantillas.Service
{
    public interface ITipoService
    {
        bool delete(int _id);
        TipoVO get(int _id);
        ICollection<TipoVO> lista();
        bool post(TipoVO _tipoVO);
        bool put(TipoVO _tipoVO);
    }
}