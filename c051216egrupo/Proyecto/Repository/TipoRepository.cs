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
    public class TipoRepository : ITipoRepository
    {
        private PlantillasDB plantillaDB;
        private ITipoUtility tipoUtility;

        public TipoRepository(PlantillasDB _plantillaDB, ITipoUtility _tipoUtility)
        {
            this.plantillaDB = _plantillaDB;
            this.tipoUtility = _tipoUtility;
        }

        public ICollection<TipoVO> Lista()
        {
            using (var plantillasDB = new PlantillasDB())
            {
                var listaTipos = plantillaDB.Tipo.SqlQuery("SELECT * FROM dbo.Tipoes WHERE oculto=0").ToList<Tipo>();

                List<TipoVO> listaVO = listaTipos.ConvertAll<TipoVO>(delegate(Tipo t)
                {
                    return this.tipoUtility.convertEntity2VO(t);
                });

                return listaVO;
            }
        }

        public TipoVO Get(int _id)
        {
            Tipo v = null;
            TipoVO vVO;
            using (var plantillaDB = new PlantillasDB())
            {
                v = plantillaDB.Tipo.Find(_id);

                vVO = this.tipoUtility.convertEntity2VO(v);
            }

            return vVO;
        }

        public Boolean Post(TipoVO _tipoVO)
        {
            Tipo _tipo = this.tipoUtility.convertVO2Entity(_tipoVO);

            using (var plantillaDB = new PlantillasDB())
            {
                _tipo = plantillaDB.Tipo.Add(_tipo);
                plantillaDB.SaveChanges();
            }
            return true;
        }

        public Boolean Delete(int _id)
        {
            using (var plantillaDB = new PlantillasDB())
            {
                Tipo v = plantillaDB.Tipo.Find(_id);

                plantillaDB.Tipo.Remove(v);

                plantillaDB.SaveChanges();
            }

            return true;
        }

        public Boolean Put(TipoVO _tipoVO)
        {
            Tipo _tipo = this.tipoUtility.convertVO2Entity(_tipoVO);

            using (var plantillaDB = new PlantillasDB())
            {
                _tipo = plantillaDB.Tipo.Attach(_tipo);
                plantillaDB.Entry(_tipo).State = System.Data.Entity.EntityState.Modified;
                plantillaDB.SaveChanges();
            }

            return true;
        }
    }
}
