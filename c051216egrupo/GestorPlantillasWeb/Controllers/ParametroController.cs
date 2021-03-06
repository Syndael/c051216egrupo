﻿
using GestorPlantillas.EntityVO;
using GestorPlantillas.Repository;
using GestorPlantillas.Service;
using GestorPlantillas.Utility;
using Microsoft.Practices.Unity;
using System.Collections.Generic;
using System.Web.Http;

namespace GestorPlantillasWeb.Controllers
{
    public class ParametroController : ApiController
    {
        private IParametroService parametroService;

        public ParametroController()
        {
            var container = new UnityContainer();
            container.RegisterInstance<IParametroUtility>(new ParametroUtility());
            container.RegisterType<IParametroRepository, ParametroRepository>();
            container.RegisterType<IParametroService, ParametroService>();

            parametroService = container.Resolve<IParametroService>();
        }

        // GET api/values
        public ICollection<ParametroVO> Get()
        {
            return this.parametroService.lista();
        }

        // GET api/values/5
        public ParametroVO Get(int id)
        {
            return this.parametroService.get(id);
        }

        // POST api/values
        public ParametroVO Post([FromBody]ParametroVO _parametroVO)
        {
            return this.parametroService.post(_parametroVO);
        }

        // PUT api/values/5
        public ParametroVO Put(int id, [FromBody]ParametroVO _parametroVO)
        {
            return this.parametroService.put(_parametroVO);
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            this.parametroService.delete(id);
        }

        public ICollection<ParametroVO> Get([FromUri]long idPlantilla)
        {
            return this.parametroService.GetParametrosByPlantillaId((int)idPlantilla);
        }
    }
}