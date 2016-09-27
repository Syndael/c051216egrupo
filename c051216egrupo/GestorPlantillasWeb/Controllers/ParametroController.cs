
using GestorPlantillas.EntityVO;
using GestorPlantillas.Service;
using Microsoft.Practices.Unity;
using System.Collections.Generic;
using System.Web.Http;

namespace GestorPlantillasWeb.Controllers
{
    public class ParametroController : ApiController
    {
        private IParametroService parametroService;

        public ParametroController(IParametroService _parametroService)
        {
            this.parametroService = _parametroService;
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
        public void Post([FromBody]ParametroVO _parametroVO)
        {
            this.parametroService.post(_parametroVO);
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]ParametroVO _parametroVO)
        {
            this.parametroService.put(_parametroVO);
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            this.parametroService.delete(id);
        }
    }
}