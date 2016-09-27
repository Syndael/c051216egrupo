import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantillasComponent }  from './componentes/plantillas.component';
import { PlantillaDetailComponent }     from './componentes/plantilla-detail.component';
import { ParametrosComponent }  from './componentes/parametros.component';
import { ParametroDetailComponent }     from './componentes/parametro-detail.component';
import { PlantillaNewComponent }     from './componentes/plantilla-new.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/plantillas',
        pathMatch: 'full'
    },
    {
        path: 'plantillas',
        component: PlantillasComponent
    },
    {
        path: 'plantilla/:id',
        component: PlantillaDetailComponent
    },
    {
        path: 'parametros',
        component: ParametrosComponent
    },
    {
        path: 'parametro/:id',
        component: ParametroDetailComponent
    },
    {
        path: 'new',
        component: PlantillaNewComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);