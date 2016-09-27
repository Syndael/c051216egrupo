
using GestorPlantilla.Service;
using GestorPlantillas.EntityVO;
using GestorPlantillas.Repository;
using GestorPlantillas.Utility;
using Microsoft.Practices.Unity;
using System.Collections.Generic;
using System.Web.Http;

namespace GestorPlantillasWeb.Controllers
{
    public class PlantillaController : ApiController
    {
        private IPlantillaService plantillaService;

        public PlantillaController()
        {
            var container = new UnityContainer();
            container.RegisterInstance<IPlantillaUtility>(new PlantillaUtility());
            container.RegisterType<IPlantillaRepository, PlantillaRepository>();
            container.RegisterType<IPlantillaService, PlantillaService>();

            plantillaService = container.Resolve<IPlantillaService>();
        }

        // GET api/values
        public ICollection<PlantillaVO> Get()
        {
            ICollection<PlantillaVO> parame = new List<PlantillaVO>();
            parame.Add(new PlantillaVO { id_plantilla = 1, nombre = "Prueba" });
            //return this.plantillaService.lista();
            return parame;
        }

        // GET api/values/5
        public PlantillaVO Get(int id)
        {
            return this.plantillaService.get(id);
        }

        // POST api/values
        public void Post(PlantillaVO _plantillaVO)
        {
            this.plantillaService.post(_plantillaVO);
        }

        // PUT api/values/5
        public void Put(PlantillaVO _plantillaVO)
        {
            this.plantillaService.put(_plantillaVO);
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            this.plantillaService.delete(id);
        }
    }
}