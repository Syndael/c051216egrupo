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
var parametro_service_1 = require('./parametro.service');
var ParametrosComponent = (function () {
    function ParametrosComponent(parametroService, router) {
        this.parametroService = parametroService;
        this.router = router;
    }
    ParametrosComponent.prototype.getParametros = function () {
        var _this = this;
        this.parametroService
            .getParametros()
            .then(function (parametros) { return _this.parametros = parametros; });
    };
    ParametrosComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.parametroService.create(name)
            .then(function (parametro) {
            _this.parametros.push(parametro);
            _this.selectedParametro = null;
        });
    };
    ParametrosComponent.prototype.delete = function (parametro) {
        var _this = this;
        this.parametroService
            .delete(parametro.id_parametro)
            .then(function () {
            _this.parametros = _this.parametros.filter(function (p) { return p !== parametro; });
            if (_this.selectedParametro === parametro) {
                _this.selectedParametro = null;
            }
        });
    };
    ParametrosComponent.prototype.ngOnInit = function () {
        this.getParametros();
    };
    ParametrosComponent.prototype.onSelect = function (parametro) {
        this.selectedParametro = parametro;
    };
    ParametrosComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedParametro.id_parametro]);
    };
    ParametrosComponent = __decorate([
        core_1.Component({
            selector: 'mis-parametros',
            templateUrl: 'app/parametro.component.html',
            styleUrls: ['app/parametro.component.css']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof parametro_service_1.ParametroService !== 'undefined' && parametro_service_1.ParametroService) === 'function' && _a) || Object, router_1.Router])
    ], ParametrosComponent);
    return ParametrosComponent;
    var _a;
}());
exports.ParametrosComponent = ParametrosComponent;
//# sourceMappingURL=parametros.component.js.map