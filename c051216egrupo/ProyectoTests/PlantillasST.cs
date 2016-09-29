using System;
using OpenQA.Selenium;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium.Chrome;
using System.Diagnostics;
using System.Threading;
using System.IO;
using System.Linq;

using Microsoft.Practices.Unity;
using OpenQA.Selenium.Support.UI;
using GestorPlantillas.EntityVO;
using GestorPlantilla.Service;
using GestorPlantillas.Service;
using GestorPlantillas.Repository;
using GestorPlantillas.Utility;

namespace BibliotecaWeb.Tests
{
    [TestClass]
    public class RecursosST
    {
        private string AppLocation = "GestorPlantillasWeb";
        private int Port = 51216;
        private IWebDriver driver;
        private string baseURL;

        private Process _iisProcess;

        private PlantillaVO plantillaTest;
        private ParametroVO parametroTestTexto;
        private ParametroVO parametroTestParametro;
        private int idPlan, idTsTx, idTsPr;

        private IParametroService servPar;
        private IPlantillaService servPla;
        private ITipoService servTip;

        [TestInitialize]
        public void SetupTest()
        {
            IniciarISS();
            Thread.Sleep(2000);

            driver = new ChromeDriver();
            baseURL = string.Format("http://localhost:{0}/index.html", Port);
            RegistrarContainer();
            InsertarRegistrosTest();
        }

        private void InsertarRegistrosTest()
        {
            PlantillaVO plant = new PlantillaVO()
            {
                descripcion = "Plantilla Desc Text",
                nombre = "PlantillaNombre",
                owner = "Creador"
            };
            this.plantillaTest = this.servPla.post(plant);
            ParametroVO param = new ParametroVO()
            {
                isText = false,
                parametro = "testParam",
                plantillaID = this.plantillaTest.id_plantilla,
                tipoID = servTip.lista().First().id_tipo
            };
            this.parametroTestParametro = this.servPar.post(param);
            param = new ParametroVO()
            {
                isText = true,
                parametro = "test texto",
                plantillaID = this.plantillaTest.id_plantilla,
                tipoID = servTip.lista().First().id_tipo
            };
            this.parametroTestTexto = this.servPar.post(param);
        }

        private void RegistrarContainer()
        {
            var container = new UnityContainer();

            container.RegisterType<IParametroUtility, ParametroUtility>();
            container.RegisterType<IPlantillaUtility, PlantillaUtility>();
            container.RegisterType<ITipoUtility, TipoUtility>();
            container.RegisterType<IParametroRepository, ParametroRepository>();
            container.RegisterType<IPlantillaRepository, PlantillaRepository>();
            container.RegisterType<ITipoRepository, TipoRepository>();
            container.RegisterType<IParametroService, ParametroService>();
            container.RegisterType<IPlantillaService, PlantillaService>();
            container.RegisterType<ITipoService, TipoService>();

            servPar = container.Resolve<IParametroService>();
            servPla = container.Resolve<IPlantillaService>();
            servTip = container.Resolve<ITipoService>();
        }

        private void EliminarRegistrosTest()
        {
            servPar.delete(parametroTestParametro.id_parametro);
            servPar.delete(parametroTestTexto.id_parametro);
            servPla.delete(plantillaTest.id_plantilla);
        }

        [TestCleanup]
        public void TeardownTest()
        {
            EliminarRegistrosTest();
            try
            {
                driver.Quit();
            }
            catch (Exception)
            {
            }
            try
            {
                _iisProcess.Kill();
            }
            catch (Exception)
            {
            }
        }

        [TestMethod]
        public void ConsultarPlantillaTest()
        {
            WebDriverWait wait = new WebDriverWait(driver, new TimeSpan(0, 1, 0));

            driver.Navigate().GoToUrl(baseURL);

            wait.Until(d => d.FindElement(By.Id("menu_plan")));
            driver.FindElement(By.Id("menu_plan")).Click();

            wait.Until(d => d.FindElement(By.Id("sp_" + plantillaTest.nombre)));
            driver.FindElement(By.Id("sp_" + plantillaTest.nombre)).Click();

            wait.Until(d => d.FindElement(By.Id("inp_" + plantillaTest.nombre)));
            Assert.AreEqual(plantillaTest.nombre, driver.FindElement(By.Id("inp_" + plantillaTest.nombre)).GetAttribute("value"));
            Assert.AreEqual(plantillaTest.owner, driver.FindElement(By.Id("inp_" + plantillaTest.owner)).GetAttribute("value"));
            Assert.AreEqual(plantillaTest.descripcion, driver.FindElement(By.Id("inp_" + plantillaTest.descripcion)).GetAttribute("value"));

            wait.Until(d => d.FindElement(By.Id("sp_" + parametroTestParametro.parametro)));
            driver.FindElement(By.Id("sp_" + parametroTestParametro.parametro)).Click();

            wait.Until(d => d.FindElement(By.Id("inp_" + parametroTestParametro.parametro)));
            Assert.AreEqual(parametroTestParametro.parametro, driver.FindElement(By.Id("inp_" + parametroTestParametro.parametro)).GetAttribute("value"));

            wait.Until(d => d.FindElement(By.Id("btCancelarParam")));
            driver.FindElement(By.Id("btCancelarParam")).Click();

            wait.Until(d => d.FindElement(By.Id("sp_" + parametroTestTexto.parametro)));
            driver.FindElement(By.Id("sp_" + parametroTestTexto.parametro)).Click();

            wait.Until(d => d.FindElement(By.Id("ta_" + parametroTestTexto.parametro)));
            Assert.AreEqual(parametroTestTexto.parametro, driver.FindElement(By.Id("ta_" + parametroTestTexto.parametro)).GetAttribute("value"));

        }

        private void IniciarISS()
        {
            var applicationPath = GetApplicationPath(AppLocation);
            var programFiles = Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles);

            _iisProcess = new Process();
            _iisProcess.StartInfo.FileName = programFiles + "\\IIS Express\\iisexpress.exe";
            _iisProcess.StartInfo.Arguments = string.Format("/path:{0} /port:{1}", applicationPath, Port);
            _iisProcess.Start();
        }


        protected virtual string GetApplicationPath(string applicationName)
        {
            var solutionFolder = Path.GetDirectoryName(Path.GetDirectoryName(Path.GetDirectoryName(AppDomain.CurrentDomain.BaseDirectory)));
            return Path.Combine(solutionFolder, applicationName);
        }
    }
}