import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/gurus" routerLinkActive="active">Gurus</a>
    </nav>

    <router-outlet></router-outlet>
  `,
  styleUrls:['../app/partial/app.component.css']
})

export class AppComponent {
  title = 'Erac Gurus' 
}
