import { Component }          from '@angular/core';

@Component({
    selector: 'my-app',

    template: `
    <nav>
      <a routerLink="/plantillas" routerLinkActive="active">Plantillas</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['app/css/app.component.css']
})
export class AppComponent {
}