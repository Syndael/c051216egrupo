import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Plantilla }                from './../modelos/plantilla';
import { PlantillaService }         from './../servicios/plantilla.service';

@Component({
  selector: 'mis-plantillas',
  templateUrl: 'app/html/plantillas.component.html',
  styleUrls: ['app/css/plantillas.component.css']
})
export class PlantillasComponent implements OnInit {
  plantillas: Plantilla[];
  selectedPlantilla: Plantilla;

  constructor(
    private plantillaService: PlantillaService,
    private router: Router) { }

  getPlantillas(): void {
      this.plantillaService
          .getPlantillas()
          .then(plantillas => this.plantillas = plantillas);
  }

  delete(plantilla: Plantilla): void {
      this.plantillaService
        .delete(plantilla.id_plantilla)
        .then(() => {
          this.plantillas = this.plantillas.filter(p => p !== plantilla);
          if (this.selectedPlantilla === plantilla) { this.selectedPlantilla = null; }
        });
  }

  ngOnInit(): void {
    this.getPlantillas();
  }

  onSelect(plantilla: Plantilla): void {
    this.selectedPlantilla = plantilla;
  }

  gotoDetail(plantillaArg: Plantilla): void {
      this.router.navigate(['/detail', plantillaArg.id_plantilla]);
  }

  gotoCrear(): void {
      this.router.navigate(['/detail']);
  }
}


