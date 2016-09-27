USE PlantillasDB;
INSERT INTO dbo.Tipoes(tipo) VALUES('String');
INSERT INTO dbo.Tipoes(tipo) VALUES('int');
INSERT INTO dbo.Tipoes(tipo) VALUES('long');
INSERT INTO dbo.Tipoes(tipo) VALUES('double');

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