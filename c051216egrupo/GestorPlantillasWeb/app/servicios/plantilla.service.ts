﻿import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Plantilla } from './../modelos/plantilla';

@Injectable()
export class PlantillaService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private headersAccept = new Headers({ 'Accept': 'application/json' });
    private plantillasUrl = 'api/plantilla';  // URL to web api

    constructor(private http: Http) { }

    getPlantillas(): Promise<Plantilla[]> {
        return this.http.get(this.plantillasUrl, { headers: this.headersAccept })
            .toPromise()
            .then(response => response.json() as Plantilla[])
            .catch(this.handleError);
    }

    getPlantilla(id: number): Promise<Plantilla> {
        let url = `${this.plantillasUrl}/${id}`;
        return this.http.get(url, { headers: this.headersAccept })
            .toPromise()
            .then(response => response.json() as Plantilla)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        let url = `${this.plantillasUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(plantilla: Plantilla): Promise<Plantilla> {
        return this.http
            .post(this.plantillasUrl, JSON.stringify({
                nombre: plantilla.nombre,
                descripcion: plantilla.descripcion,
                owner: plantilla.owner
            }), { headers: this.headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    update(plantilla: Plantilla): Promise<Plantilla> {
        const url = `${this.plantillasUrl}/${plantilla.id_plantilla}`;
        return this.http
            .put(url, JSON.stringify(plantilla), { headers: this.headers })
            .toPromise()
            .then(() => plantilla)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}