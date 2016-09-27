import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Parametro }                from './../modelos/parametro';
import { ParametroService }         from './../servicios/parametro.service';

@Component({
    selector: 'mis-parametros',
    templateUrl: 'app/html/parametros.component.html',
    styleUrls: ['app/css/css.component.css']
})
export class ParametrosComponent implements OnInit {
    parametros: Parametro[];
    selectedParametro: Parametro;

  constructor(
    private parametroService: ParametroService,
    private router: Router) { }

  getParametros(): void {
      this.parametroService
          .getParametros()
          .then(parametros => this.parametros = parametros);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.parametroService.create(name)
        .then(parametro => {
            this.parametros.push(parametro);
        this.selectedParametro = null;
      });
  }

  delete(parametro: Parametro): void {
      this.parametroService
          .delete(parametro.id_parametro)
        .then(() => {
            this.parametros = this.parametros.filter(p => p !== parametro);
            if (this.selectedParametro === parametro) { this.selectedParametro = null; }
        });
  }

  ngOnInit(): void {
      this.getParametros();
  }

  onSelect(parametro: Parametro): void {
      this.selectedParametro = parametro;
  }

  gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedParametro.id_parametro]);
  }
}


