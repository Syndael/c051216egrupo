"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var PlantillaService = (function () {
    function PlantillaService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.plantillasUrl = 'api/plantilla'; // URL to web api
    }
    PlantillaService.prototype.getPlantillas = function () {
        return this.http.get(this.plantillasUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    PlantillaService.prototype.getPlantilla = function (id) {
        return this.getPlantillas()
            .then(function (plantillas) { return plantillas.find(function (plantilla) { return plantilla.id_plantilla === id; }); });
    };
    PlantillaService.prototype.delete = function (id) {
        var url = this.plantillasUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    PlantillaService.prototype.create = function (name) {
        return this.http
            .post(this.plantillasUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    PlantillaService.prototype.update = function (plantilla) {
        var url = this.plantillasUrl + "/" + plantilla.id_plantilla;
        return this.http
            .put(url, JSON.stringify(plantilla), { headers: this.headers })
            .toPromise()
            .then(function () { return plantilla; })
            .catch(this.handleError);
    };
    PlantillaService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    PlantillaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PlantillaService);
    return PlantillaService;
}());
exports.PlantillaService = PlantillaService;
//# sourceMappingURL=plantilla.service.js.map