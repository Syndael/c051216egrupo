import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Parametro }        from './../modelos/parametro';
import { ParametroService } from './../servicios/parametro.service';

@Component({
    selector: 'detalle-parametro',
    templateUrl: 'app/html/parametro-detail.component.html',
    styleUrls: ['app/css/css-detail.component.css']
})
export class ParametroDetailComponent implements OnInit {
    @Input() parametro: Parametro;

    constructor(
        private parametroService: ParametroService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
    }

    save(): void {
        this.parametroService.update(this.parametro)
            .then(this.goBack);
    }

    goBack(): void {
        this.parametro = null;
    }
}


