import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Plantilla }        from './../modelos/plantilla';
import { PlantillaService } from './../servicios/plantilla.service';

@Component({
    selector: 'new-plantilla',
    templateUrl: 'app/html/plantilla-detail.component.html',
    styleUrls: ['app/css/css-detail.component.css']
})
export class PlantillaNewComponent implements OnInit {
    plantilla: Plantilla;

    constructor(
        private plantillaService: PlantillaService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.plantilla = new Plantilla();
    }

    save(): void {
        this.plantillaService.create(this.plantilla)
            .then(this.goBack);
    }

    goBack(): void {
        window.history.back();
    }
}