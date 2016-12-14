import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-gurus></my-gurus>
  `
})

export class AppComponent {
  title = 'Erac Gurus' 
}
