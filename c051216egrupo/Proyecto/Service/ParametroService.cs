﻿
using GestorPlantillas.EntityVO;
using GestorPlantillas.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlquilerVehiculosApp.Service
{
    public class ParametroService : IParametroService
    {
        private IParametroRepository parametroRepository;

        public ParametroService(IParametroRepository _parametroRepository)
        {
            this.parametroRepository = _parametroRepository;
        }

        public ICollection<ParametroVO> lista()
        {
            return this.parametroRepository.Lista();
        }

        public ParametroVO get(int _id)
        {
            return this.parametroRepository.Get(_id);
        }

        public Boolean post(ParametroVO _parametroVO)
        {
            return this.parametroRepository.Post(_parametroVO);
        }

        public Boolean delete(int _id)
        {
            return this.parametroRepository.Delete(_id);
        }

        public Boolean put(ParametroVO _parametroVO)
        {
            return this.parametroRepository.Put(_parametroVO);
        }
    }
}