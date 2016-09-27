import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Plantilla }                from './modelos/plantilla';
import { PlantillaService }         from './plantilla.service';

@Component({
  selector: 'mis-plantillas',
  templateUrl: 'app/plantillas.component.html',
  styleUrls: ['app/plantillas.component.css']
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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.plantillaService.create(name)
      .then(plantilla => {
          this.plantillas.push(plantilla);
        this.selectedPlantilla = null;
      });
  }

  delete(plantilla: Plantilla): void {
      this.plantillaService
        .delete(plantilla.id)
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

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPlantilla.id]);
  }
}


