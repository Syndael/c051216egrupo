import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Plantilla }        from './../modelos/plantilla';
import { PlantillaService } from './../servicios/plantilla.service';

@Component({
    selector: 'detalle-plantilla',
    templateUrl: 'app/html/plantilla-detail.component.html',
    styleUrls: ['app/css/css-detail.component.css']
})

export class PlantillaDetailComponent implements OnInit {
    plantilla: Plantilla;
    nuevo: number;

    constructor(
        private plantillaService: PlantillaService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.plantillaService.getPlantilla(id)
                .then(plantilla => this.plantilla = plantilla)
                .then(plantilla => { if (plantilla.id_plantilla != 0) { this.nuevo = plantilla.id_plantilla } });
        });

        
    }

    save(): void {
        this.plantillaService.update(this.plantilla)
            .then(this.goBack);
    }

    goBack(): void {
        window.history.back();
    }
}