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
    public class PlantillaRepository : IPlantillaRepository
    {
        private PlantillasDB plantillaDB;
        private IPlantillaUtility plantillaUtility;

        
        public PlantillaRepository(PlantillasDB _plantillaDB, IPlantillaUtility _plantillaUtility)
        {
            this.plantillaDB = _plantillaDB;
            this.plantillaUtility = _plantillaUtility;
        }

        public ICollection<PlantillaVO> Lista()
        {
            using (var plantillasDB = new PlantillasDB())
            {
                var listaPlantillas = plantillasDB.Plantillas.ToList<Plantilla>();

                List<PlantillaVO> listaVO = listaPlantillas.ConvertAll<PlantillaVO>(delegate(Plantilla p)
                {
                    return this.plantillaUtility.convertEntity2VO(p);
                });

                return listaVO;
            }
        }

        public PlantillaVO Get(int _id)
        {
            Plantilla p = null;
            PlantillaVO pVO;
            using (var plantillaDB = new PlantillasDB())
            {
                p = plantillaDB.Plantillas.Find(_id);

                pVO = this.plantillaUtility.convertEntity2VO(p);
            }

            
            return pVO;
        }

        public Boolean Post(PlantillaVO _plantillaVO)
        {
            Plantilla _plantilla = this.plantillaUtility.convertVO2Entity(_plantillaVO);

            using (var plantillasDB = new PlantillasDB())
            {
                _plantilla = plantillasDB.Plantillas.Add(_plantilla);
                plantillasDB.SaveChanges();
            }
            return true;
        }

        public Boolean Delete(int _id)
        {
            using (var plantillasDB = new PlantillasDB())
            {
                Plantilla p = plantillasDB.Plantillas.Find(_id);

                plantillasDB.Plantillas.Remove(p);

                plantillasDB.SaveChanges();
            }

            return true;
        }

        public Boolean Put(PlantillaVO _plantillaVO)
        {
            Plantilla _plantilla = this.plantillaUtility.convertVO2Entity(_plantillaVO);

            using (var plantillasDB = new PlantillasDB())
            {
                _plantilla = plantillasDB.Plantillas.Attach(_plantilla);
                plantillasDB.Entry(_plantilla).State = System.Data.Entity.EntityState.Modified;
                plantillasDB.SaveChanges();
            }

            return true;
        }
    }
}
