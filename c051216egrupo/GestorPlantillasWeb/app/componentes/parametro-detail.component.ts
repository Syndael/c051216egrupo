import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Parametro }        from './../modelos/parametro';
import { ParametroService } from './../servicios/parametro.service';

@Component({
    selector: 'detalle-parametro',
    templateUrl: 'app/html/parametro-detail.component.html',
    styleUrls: ['app/css/parametro-detail.component.css']
})
export class ParametroDetailComponent implements OnInit {
    parametro: Parametro;

  constructor(
      private parametroService: ParametroService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.parametroService.getParametro(id)
          .then(parametro => this.parametro = parametro);
    });
  }

  save(): void {
      this.parametroService.update(this.parametro)
      .then(this.goBack);
  }

  goBack(): void {
    window.history.back();
  }
}


