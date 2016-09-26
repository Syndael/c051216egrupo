import { Plantilla } from './plantilla';
import { Tipo } from './tipo';

export class Parametro {
    id_parametro: number;
    plantillaId: number;
    tipoId: number;
    parametro: string;
    plantilla: Plantilla;
    tipo: Tipo;
}