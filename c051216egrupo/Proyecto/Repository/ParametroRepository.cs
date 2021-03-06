﻿using GestorPlantillas.Entity;
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

                List<ParametroVO> listaVO = listaParametros.ConvertAll<ParametroVO>(delegate (Parametro p)
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

        public ParametroVO Post(ParametroVO _parametroVO)
        {
            Parametro _parametro = this.parametroUtility.convertVO2Entity(_parametroVO);

            using (var plantillasDB = new PlantillasDB())
            {
                if(_parametro.tipoID == 0)
                {
                    _parametro.Tipo = plantillasDB.Tipo.SqlQuery("SELECT * FROM dbo.Tipoes WHERE tipo='TEXTO'").FirstOrDefault();
                    _parametro.tipoID = _parametro.Tipo.id;
                }
                _parametro = plantillasDB.Parametros.Add(_parametro);
                plantillasDB.SaveChanges();
            }
            return this.parametroUtility.convertEntity2VO(_parametro);
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

        public ParametroVO Put(ParametroVO _parametroVO)
        {
            Parametro _parametro = this.parametroUtility.convertVO2Entity(_parametroVO);

            using (var plantillasDB = new PlantillasDB())
            {
                _parametro = plantillasDB.Parametros.Attach(_parametro);
                plantillasDB.Entry(_parametro).State = System.Data.Entity.EntityState.Modified;
                plantillasDB.SaveChanges();
            }
            return this.parametroUtility.convertEntity2VO(_parametro);
        }

        public ICollection<ParametroVO> GetParametrosByPlantillaId(int _id)
        {
            ICollection<ParametroVO> parametros = new List<ParametroVO>();

            using (var plantillasDB = new PlantillasDB())
            {
                String strQuery = String.Format("SELECT * FROM dbo.Parametroes WHERE plantillaID={0}", _id);
                ICollection<Parametro> parametrosEnt = plantillasDB.Parametros.SqlQuery(strQuery).ToList<Parametro>();
                parametros = this.parametroUtility.convertListEntity2VO(parametrosEnt);
            }

            return parametros;
        }
    }
}
