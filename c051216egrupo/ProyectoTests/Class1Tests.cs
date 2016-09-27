using GestorPlantilla.Service;
using GestorPlantillas;
using GestorPlantillas.EntityVO;
using GestorPlantillas.Repository;
using GestorPlantillas.Utility;
using Microsoft.Practices.Unity;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Proyecto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Proyecto.Tests
{
    [TestClass()]
    public class Class1Tests
    {
        private IPlantillaService service;

        [TestInitialize()]
        public void TestSetUp()
        {
            var container = new UnityContainer();
            container.RegisterInstance<IPlantillaUtility>(new PlantillaUtility());
            container.RegisterType<IPlantillaRepository, PlantillaRepository>();
            container.RegisterType<IPlantillaService, PlantillaService>();

            service = container.Resolve<IPlantillaService>();
        }

        [TestMethod()]
        public void Class1Test()
        {
            PlantillaVO plantillaVO = new PlantillaVO();

            plantillaVO.nombre = " prueba";


            service.post(plantillaVO);



            Assert.AreEqual(true, true);
        }
    }
}