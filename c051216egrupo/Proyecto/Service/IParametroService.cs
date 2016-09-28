using System.Collections.Generic;
using GestorPlantillas.EntityVO;

namespace GestorPlantillas.Service
{
    public interface IParametroService
    {
        bool delete(int _id);
        ParametroVO get(int _id);
        ICollection<ParametroVO> lista();
        ParametroVO post(ParametroVO _parametroVO);
        ParametroVO put(ParametroVO _parametroVO);

        ICollection<ParametroVO> GetParametrosByPlantillaId(int _id);
    }
}