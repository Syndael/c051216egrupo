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
var parametro_service_1 = require('./../servicios/parametro.service');
var ParametroDetailComponent = (function () {
    function ParametroDetailComponent(parametroService, route) {
        this.parametroService = parametroService;
        this.route = route;
    }
    ParametroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.parametroService.getParametro(id)
                .then(function (parametro) { return _this.parametro = parametro; });
        });
    };
    ParametroDetailComponent.prototype.save = function () {
        this.parametroService.update(this.parametro)
            .then(this.goBack);
    };
    ParametroDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    ParametroDetailComponent = __decorate([
        core_1.Component({
            selector: 'detalle-parametro',
            templateUrl: 'app/html/parametro-detail.component.html',
            styleUrls: ['app/css/parametro-detail.component.css']
        }), 
        __metadata('design:paramtypes', [parametro_service_1.ParametroService, router_1.ActivatedRoute])
    ], ParametroDetailComponent);
    return ParametroDetailComponent;
}());
exports.ParametroDetailComponent = ParametroDetailComponent;
//# sourceMappingURL=parametro-detail.component.js.map