import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }         from './app.component';
import { PlantillasComponent }   from './plantillas.component';
import { PlantillaDetailComponent }  from './plantilla-detail.component';
import { PlantillaService }          from './plantilla.service';
import { routing }              from './app.routing';

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
        PlantillaDetailComponent
    ],
    providers: [
        PlantillaService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}