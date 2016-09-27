import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Plantilla }        from './modelos/plantilla';
import { PlantillaService } from './plantilla.service';

@Component({
  selector: 'detalle-plantilla',
  templateUrl: 'app/plantilla-detail.component.html',
  styleUrls: ['app/plantila-detail.component.css']
})
export class PlantillaDetailComponent implements OnInit {
  plantilla: Plantilla;

  constructor(
      private plantillaService: PlantillaService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.plantillaService.getPlantilla(id)
        .then(plantilla => this.plantilla = plantilla);
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


