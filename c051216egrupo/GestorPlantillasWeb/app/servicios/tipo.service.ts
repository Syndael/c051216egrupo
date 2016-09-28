import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Tipo } from './../modelos/tipo';

@Injectable()
export class TipoService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private headersAccept = new Headers({ 'Accept': 'application/json' });
    private tipoUrl = 'api/tipo';  // URL to web api

    constructor(private http: Http) { }

    getTipos(): Promise<Tipo[]> {
        return this.http.get(this.tipoUrl, { headers: this.headersAccept })
            .toPromise()
            .then(response => response.json() as Tipo[])
            .catch(this.handleError);
    }

    getTipo(id: number): Promise<Tipo> {
        let url = `${this.tipoUrl}/${id}`;
        return this.http.get(url, { headers: this.headersAccept })
            .toPromise()
            .then(response => response.json() as Tipo)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}