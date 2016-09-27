"use strict";
var router_1 = require('@angular/router');
var plantillas_component_1 = require('./componentes/plantillas.component');
var plantilla_detail_component_1 = require('./componentes/plantilla-detail.component');
var parametros_component_1 = require('./componentes/parametros.component');
var parametro_detail_component_1 = require('./componentes/parametro-detail.component');
var plantilla_new_component_1 = require('./componentes/plantilla-new.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/plantillas',
        pathMatch: 'full'
    },
    {
        path: 'plantillas',
        component: plantillas_component_1.PlantillasComponent
    },
    {
        path: 'plantilla/:id',
        component: plantilla_detail_component_1.PlantillaDetailComponent
    },
    {
        path: 'parametros',
        component: parametros_component_1.ParametrosComponent
    },
    {
        path: 'parametro/:id',
        component: parametro_detail_component_1.ParametroDetailComponent
    },
    {
        path: 'new',
        component: plantilla_new_component_1.PlantillaNewComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map