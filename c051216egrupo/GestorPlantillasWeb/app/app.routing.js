"use strict";
var router_1 = require('@angular/router');
var plantillas_component_1 = require('./plantillas.component');
var plantilla_detail_component_1 = require('./plantilla-detail.component');
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
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map