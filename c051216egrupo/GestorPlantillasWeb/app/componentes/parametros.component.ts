import { Component, OnInit, Input } from '@angular/core';
import { Router }            from '@angular/router';

import { Parametro }                from './../modelos/parametro';
import { Plantilla }                from './../modelos/plantilla';
import { ParametroService }         from './../servicios/parametro.service';
import { TruncatePipe }         from './../utils/truncatepipe';

@Component({
    selector: 'mis-parametros',
    templateUrl: 'app/html/parametros.component.html',
    styleUrls: ['app/css/css.component.css']
})
export class ParametrosComponent implements OnInit {
    parametros: Parametro[];
    selectedParametro: Parametro;
    @Input() plantilla: Plantilla;
    vistaprevia: String;

    constructor(
        private parametroService: ParametroService,
        private router: Router) { }

    getParametros(): void {
        if (this.plantilla) {
            this.parametroService
                .getParametroByPlantilla(this.plantilla.id_plantilla)
                .then(parametros => { this.enviarParametros(parametros) });
        }
    }

    enviarParametros(params: Parametro[]): void {
        this.parametros = params;
        this.vistaprevia = "";
        for (let i = 0; i < params.length; i++) {
            if (params[i].isText) {
                this.vistaprevia = this.vistaprevia + " " + params[i].parametro;
            } else {
                this.vistaprevia = this.vistaprevia + " {{" + params[i].parametro+"}}";
            }
        }
    }

    add(): void {
        let parAux = new Parametro();
        parAux.plantillaId = this.plantilla.id_plantilla;
        parAux.plantilla = this.plantilla;
        this.selectedParametro = parAux;
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