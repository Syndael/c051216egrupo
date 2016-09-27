import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantillasComponent }  from './componentes/plantillas.component';
import { PlantillaDetailComponent }     from './componentes/plantilla-detail.component';

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
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);