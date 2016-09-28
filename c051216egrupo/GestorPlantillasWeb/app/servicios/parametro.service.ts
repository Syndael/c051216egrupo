import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Parametro } from './../modelos/parametro';

@Injectable()
export class ParametroService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private headersAccept = new Headers({ 'Accept': 'application/json' });
    private parametrosUrl = 'api/parametro';  // URL to web api

    constructor(private http: Http) { }

    getParametros(): Promise<Parametro[]> {
        return this.http.get(this.parametrosUrl, { headers: this.headersAccept })
            .toPromise()
            .then(response => response.json() as Parametro[])
            .catch(this.handleError);
    }

    getParametro(id: number): Promise<Parametro> {
        let url = `${this.parametrosUrl}/${id}`;
        return this.http.get(url, { headers: this.headersAccept })
            .toPromise()
            .then(response => response.json() as Parametro)
            .catch(this.handleError);
    }

    getParametroByPlantilla(id: number): Promise<Parametro[]> {
        let url = `${this.parametrosUrl}/?idPlantilla=${id}`;
        return this.http.get(url, { headers: this.headersAccept })
            .toPromise()
            .then(response => response.json() as Parametro[])
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        let url = `${this.parametrosUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(parametroArg: Parametro): Promise<Parametro> {
        return this.http
            .post(this.parametrosUrl, JSON.stringify({
                isText: parametroArg.isText,
                parametro: parametroArg.parametro,
                plantillaId: parametroArg.plantillaId,
                tipoId: parametroArg.tipoId
            }), { headers: this.headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    update(parametro: Parametro): Promise<Parametro> {
        const url = `${this.parametrosUrl}/${parametro.id_parametro}`;
        return this.http
            .put(url, JSON.stringify(parametro), { headers: this.headers })
            .toPromise()
            .then(() => parametro)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}