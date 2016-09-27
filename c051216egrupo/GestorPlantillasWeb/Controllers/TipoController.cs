using Microsoft.Practices.Unity;
using System.Collections.Generic;
using System.Web.Http;

namespace GestorPlantillasWeb.Controllers
{
    public class TipoController : ApiController
    {
        private ITipoService tipoService;

        public TipoController()
        {
            var container = new UnityContainer();
            container.RegisterInstance<ITipoUtility>(new TipoUtility());
            container.RegisterType<ITipoRepository, TipoRepository>();
            container.RegisterType<ITipoService, TipoService>();

            tipoService = container.Resolve<ITipoService>();
        }

        // GET api/values
        public ICollection<TipoVO> Get()
        {
            return this.tipoService.lista();
        }

        // GET api/values/5
        public TipoVO Get(int id)
        {
            return this.tipoService.get(id);
        }

        // POST api/values
        public void Post([FromBody]TipoVO _tipoVO)
        {
            this.tipoService.post(_tipoVO);
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]TipoVO _tipoVO)
        {
            this.tipoService.put(_tipoVO);
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            this.tipoService.delete(id);
        }
    }
}