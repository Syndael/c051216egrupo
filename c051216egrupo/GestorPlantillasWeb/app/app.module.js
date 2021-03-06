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
require('./rxjs-extensions');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var plantillas_component_1 = require('./componentes/plantillas.component');
var plantilla_detail_component_1 = require('./componentes/plantilla-detail.component');
var plantilla_new_component_1 = require('./componentes/plantilla-new.component');
var plantilla_service_1 = require('./servicios/plantilla.service');
var parametros_component_1 = require('./componentes/parametros.component');
var parametro_detail_component_1 = require('./componentes/parametro-detail.component');
var parametro_service_1 = require('./servicios/parametro.service');
var tipo_service_1 = require('./servicios/tipo.service');
var app_routing_1 = require('./app.routing');
var truncatepipe_1 = require('./utils/truncatepipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                plantillas_component_1.PlantillasComponent,
                plantilla_detail_component_1.PlantillaDetailComponent,
                parametros_component_1.ParametrosComponent,
                parametro_detail_component_1.ParametroDetailComponent,
                plantilla_new_component_1.PlantillaNewComponent,
                truncatepipe_1.TruncatePipe,
            ],
            providers: [
                plantilla_service_1.PlantillaService,
                parametro_service_1.ParametroService,
                tipo_service_1.TipoService,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map