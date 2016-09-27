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
var PlantillasComponent = (function () {
    function PlantillasComponent(plantillaService, router) {
        this.plantillaService = plantillaService;
        this.router = router;
    }
    PlantillasComponent.prototype.getPlantillas = function () {
        var _this = this;
        this.plantillaService
            .getPlantillas()
            .then(function (plantillas) { return _this.plantillas = plantillas; });
    };
    PlantillasComponent.prototype.delete = function (plantilla) {
        var _this = this;
        this.plantillaService
            .delete(plantilla.id_plantilla)
            .then(function () {
            _this.plantillas = _this.plantillas.filter(function (p) { return p !== plantilla; });
            if (_this.selectedPlantilla === plantilla) {
                _this.selectedPlantilla = null;
            }
        });
    };
    PlantillasComponent.prototype.ngOnInit = function () {
        this.getPlantillas();
    };
    PlantillasComponent.prototype.onSelect = function (plantilla) {
        this.selectedPlantilla = plantilla;
    };
    PlantillasComponent.prototype.gotoDetail = function (plantillaArg) {
        this.router.navigate(['/plantilla', plantillaArg.id_plantilla]);
    };
    PlantillasComponent.prototype.gotoCrear = function () {
        this.router.navigate(['/new']);
    };
    PlantillasComponent = __decorate([
        core_1.Component({
            selector: 'mis-plantillas',
            templateUrl: 'app/html/plantillas.component.html',
            styleUrls: ['app/css/css.component.css']
        }), 
        __metadata('design:paramtypes', [plantilla_service_1.PlantillaService, router_1.Router])
    ], PlantillasComponent);
    return PlantillasComponent;
}());
exports.PlantillasComponent = PlantillasComponent;
//# sourceMappingURL=plantillas.component.js.map