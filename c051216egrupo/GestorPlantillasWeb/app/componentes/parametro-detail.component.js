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
var router_1 = require('@angular/router');
var parametro_1 = require('./../modelos/parametro');
var parametro_service_1 = require('./../servicios/parametro.service');
var tipo_service_1 = require('./../servicios/tipo.service');
var parametros_component_1 = require('./../componentes/parametros.component');
var ParametroDetailComponent = (function () {
    function ParametroDetailComponent(parametroService, route, tipoService, componenteParametros) {
        this.parametroService = parametroService;
        this.route = route;
        this.tipoService = tipoService;
        this.componenteParametros = componenteParametros;
    }
    ParametroDetailComponent.prototype.getTipos = function () {
        var _this = this;
        this.tipoService
            .getTipos()
            .then(function (t) { return _this.tipos = t; });
    };
    ParametroDetailComponent.prototype.ngOnInit = function () {
        this.getTipos();
    };
    ParametroDetailComponent.prototype.guardarParametro = function () {
        var _this = this;
        if (this.parametro.id_parametro != undefined) {
            this.parametroService.update(this.parametro)
                .then(function (p) { _this.goBack(); });
        }
        else {
            this.parametroService.create(this.parametro)
                .then(function (p) { _this.goBack(); });
        }
    };
    ParametroDetailComponent.prototype.goBack = function () {
        this.componenteParametros.getParametros();
        this.parametro = null;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', parametro_1.Parametro)
    ], ParametroDetailComponent.prototype, "parametro", void 0);
    ParametroDetailComponent = __decorate([
        core_1.Component({
            selector: 'detalle-parametro',
            templateUrl: 'app/html/parametro-detail.component.html',
            styleUrls: ['app/css/css-detail.component.css']
        }), 
        __metadata('design:paramtypes', [parametro_service_1.ParametroService, router_1.ActivatedRoute, tipo_service_1.TipoService, parametros_component_1.ParametrosComponent])
    ], ParametroDetailComponent);
    return ParametroDetailComponent;
}());
exports.ParametroDetailComponent = ParametroDetailComponent;
//# sourceMappingURL=parametro-detail.component.js.map