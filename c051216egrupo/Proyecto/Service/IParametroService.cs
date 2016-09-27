using System.Collections.Generic;
using GestorPlantillas.EntityVO;

namespace AlquilerVehiculosApp.Service
{
    public interface IParametroService
    {
        bool delete(int _id);
        ParametroVO get(int _id);
        ICollection<ParametroVO> lista();
        bool post(ParametroVO _parametroVO);
        bool put(ParametroVO _parametroVO);
    }
}