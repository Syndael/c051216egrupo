import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }         from './app.component';
import { PlantillasComponent }   from './componentes/plantillas.component';
import { PlantillaDetailComponent }  from './componentes/plantilla-detail.component';
import { PlantillaNewComponent }  from './componentes/plantilla-new.component';
import { PlantillaService }          from './servicios/plantilla.service';
import { ParametrosComponent }   from './componentes/parametros.component';
import { ParametroDetailComponent }  from './componentes/parametro-detail.component';
import { ParametroService }          from './servicios/parametro.service';
import { TipoService }          from './servicios/tipo.service';
import { routing }              from './app.routing';
import { TruncatePipe }         from './utils/truncatepipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        PlantillasComponent,
        PlantillaDetailComponent,
        ParametrosComponent,
        ParametroDetailComponent,
        PlantillaNewComponent,
        TruncatePipe,
    ],
    providers: [
        PlantillaService,
        ParametroService,
        TipoService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}