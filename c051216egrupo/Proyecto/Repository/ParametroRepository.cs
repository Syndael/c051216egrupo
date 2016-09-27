using GestorPlantillas.Entity;
using GestorPlantillas.EntityVO;
using GestorPlantillas.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GestorPlantillas.Repository
{
    public class ParametroRepository : IParametroRepository
    {
        private PlantillasDB plantillasDB;
        private IParametroUtility parametroUtility;

        
        public ParametroRepository(PlantillasDB _plantillasDB, IParametroUtility _parametroUtility)
        {
            this.plantillasDB = _plantillasDB;
            this.parametroUtility = _parametroUtility;
        }

        public ICollection<ParametroVO> Lista()
        {
            using (var plantillasDB = new PlantillasDB())
            {
                var listaParametros = plantillasDB.Parametros.ToList<Parametro>();

                List<ParametroVO> listaVO = listaParametros.ConvertAll<ParametroVO>(delegate(Parametro p)
                {
                    return this.parametroUtility.convertEntity2VO(p);
                });

                return listaVO;
            }
        }

        public ParametroVO Get(int _id)
        {
            Parametro p = null;
            ParametroVO pVO;
            using (var plantillasDB = new PlantillasDB())
            {
                p = plantillasDB.Parametros.Find(_id);

              pVO = this.parametroUtility.convertEntity2VO(p);
            }
            
            return pVO;
        }

        public Boolean Post(ParametroVO _parametroVO)
        {
            Parametro _parametro = this.parametroUtility.convertVO2Entity(_parametroVO);

            using (var plantillasDB = new PlantillasDB())
            {
                _parametro = plantillasDB.Parametros.Add(_parametro);
                plantillasDB.SaveChanges();
            }
            return true;
        }

        public Boolean Delete(int _id)
        {
            using (var plantillasDB = new PlantillasDB())
            {
                Parametro p = plantillasDB.Parametros.Find(_id);

                plantillasDB.Parametros.Remove(p);

                plantillasDB.SaveChanges();
            }

            return true;
        }

        public Boolean Put(ParametroVO _parametroVO)
        {
            Parametro _parametro = this.parametroUtility.convertVO2Entity(_parametroVO);

            using (var plantillasDB = new PlantillasDB())
            {
                _parametro = plantillasDB.Parametros.Attach(_parametro);
                plantillasDB.Entry(_parametro).State = System.Data.Entity.EntityState.Modified;
                plantillasDB.SaveChanges();
            }
            return true;
        }
    }
}
