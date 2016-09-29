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
var plantilla_service_1 = require('./../servicios/plantilla.service');
var PlantillaDetailComponent = (function () {
    function PlantillaDetailComponent(plantillaService, route) {
        this.plantillaService = plantillaService;
        this.route = route;
    }
    PlantillaDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.plantillaService.getPlantilla(id)
                .then(function (plantilla) { return _this.plantilla = plantilla; })
                .then(function (plantilla) { if (plantilla.id_plantilla != 0) {
                _this.nuevo = plantilla.id_plantilla;
            } });
        });
    };
    PlantillaDetailComponent.prototype.save = function () {
        this.plantillaService.update(this.plantilla)
            .then(this.goBack);
    };
    PlantillaDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    PlantillaDetailComponent = __decorate([
        core_1.Component({
            selector: 'detalle-plantilla',
            templateUrl: 'app/html/plantilla-detail.component.html',
            styleUrls: ['app/css/css-detail.component.css']
        }), 
        __metadata('design:paramtypes', [plantilla_service_1.PlantillaService, router_1.ActivatedRoute])
    ], PlantillaDetailComponent);
    return PlantillaDetailComponent;
}());
exports.PlantillaDetailComponent = PlantillaDetailComponent;
//# sourceMappingURL=plantilla-detail.component.js.map