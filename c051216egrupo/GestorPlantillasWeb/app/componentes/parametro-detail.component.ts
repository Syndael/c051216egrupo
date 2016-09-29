import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Parametro }        from './../modelos/parametro';
import { ParametroService } from './../servicios/parametro.service';
import { Tipo }        from './../modelos/tipo';
import { TipoService } from './../servicios/tipo.service';
import { ParametrosComponent }        from './../componentes/parametros.component';

@Component({
    selector: 'detalle-parametro',
    templateUrl: 'app/html/parametro-detail.component.html',
    styleUrls: ['app/css/css-detail.component.css']
})

export class ParametroDetailComponent implements OnInit {
    @Input() parametro: Parametro;
    tipos: Tipo[];

    constructor(
        private parametroService: ParametroService,
        private route: ActivatedRoute,
        private tipoService: TipoService,
        private componenteParametros: ParametrosComponent) { }

    getTipos(): void {
        this.tipoService
            .getTipos()
            .then(t => this.tipos = t);
    }

    ngOnInit(): void {
        this.getTipos();
    }

    guardarParametro(): void {
        if (this.parametro.id_parametro != undefined) {
            this.parametroService.update(this.parametro)
                .then(p => { this.goBack() });
        } else {
            this.parametroService.create(this.parametro)
                .then(p => { this.goBack() });
        }
    }

    goBack(): void {
        this.componenteParametros.getParametros();
        this.parametro = null;
    }
}