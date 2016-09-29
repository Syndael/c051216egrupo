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
var ParametroService = (function () {
    function ParametroService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headersAccept = new http_1.Headers({ 'Accept': 'application/json' });
        this.parametrosUrl = 'api/parametro'; // URL to web api
    }
    ParametroService.prototype.getParametros = function () {
        return this.http.get(this.parametrosUrl, { headers: this.headersAccept })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ParametroService.prototype.getParametro = function (id) {
        var url = this.parametrosUrl + "/" + id;
        return this.http.get(url, { headers: this.headersAccept })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ParametroService.prototype.getParametroByPlantilla = function (id) {
        var url = this.parametrosUrl + "/?idPlantilla=" + id;
        return this.http.get(url, { headers: this.headersAccept })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ParametroService.prototype.delete = function (id) {
        var url = this.parametrosUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ParametroService.prototype.create = function (parametroArg) {
        return this.http
            .post(this.parametrosUrl, JSON.stringify(parametroArg), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ParametroService.prototype.update = function (parametro) {
        var url = this.parametrosUrl + "/" + parametro.id_parametro;
        return this.http
            .put(url, JSON.stringify(parametro), { headers: this.headers })
            .toPromise()
            .then(function () { return parametro; })
            .catch(this.handleError);
    };
    ParametroService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ParametroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ParametroService);
    return ParametroService;
}());
exports.ParametroService = ParametroService;
//# sourceMappingURL=parametro.service.js.map