﻿using System.Collections.Generic;
using GestorPlantillas.EntityVO;

namespace GestorPlantillas.Repository
{
    public interface IParametroRepository
    {
        bool Delete(int _id);
        ParametroVO Get(int _id);
        ICollection<ParametroVO> Lista();
        ParametroVO Post(ParametroVO _parametroVO);
        ParametroVO Put(ParametroVO _parametroVO);

        ICollection<ParametroVO> GetParametrosByPlantillaId(int _id);
    }
}