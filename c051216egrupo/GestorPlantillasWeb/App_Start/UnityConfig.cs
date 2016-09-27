using GestorPlantillas.Repository;
using GestorPlantillas.Service;
using GestorPlantillas.Utility;
using Microsoft.Practices.Unity;
using System.Web.Http;
using Unity.WebApi;

namespace GestorPlantillasWeb
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();
            container.RegisterInstance<IParametroUtility>(new ParametroUtility());
            container.RegisterType<ParametroRepository, ParametroRepository>();
            container.RegisterType<IParametroService, ParametroService>();

            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}