USE PlantillasDB;
INSERT INTO dbo.Tipoes(tipo, oculto) VALUES('String', 0);
INSERT INTO dbo.Tipoes(tipo, oculto) VALUES('int', 0);
INSERT INTO dbo.Tipoes(tipo, oculto) VALUES('long', 0);
INSERT INTO dbo.Tipoes(tipo, oculto) VALUES('double', 0);
INSERT INTO dbo.Tipoes(tipo, oculto) VALUES('TEXTO', 1);

INSERT INTO dbo.Plantillas(nombre, descripcion, owner)
VALUES('Plantilla 1', 'Plantilla de Prueba 1' , 'Ss');
INSERT INTO dbo.Plantillas(nombre, descripcion, owner)
VALUES('Plantilla 2', 'Plantilla de Prueba 2' , 'S2');

INSERT INTO dbo.Parametroes(plantillaID, tipoID, parametro, isText)
VALUES (1, 1, 'nombre', 0);
INSERT INTO dbo.Parametroes(plantillaID, tipoID, parametro, isText)
VALUES (2, 1, 'nombre', 0);
INSERT INTO dbo.Parametroes(plantillaID, tipoID, parametro, isText)
VALUES (2, 2, 'numero', 0);