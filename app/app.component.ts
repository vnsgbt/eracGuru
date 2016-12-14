import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{guru.name}}</h2>
    <div>
      <label>id: </label>
      {{guru.id}}
    </div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="guru.name" placeholder="name">
    </div>
  `,
})

export class AppComponent  {
  title = 'Erac Gurus' 
  name = 'Comps QAs' 
  guru: Guru = {
    id: 1,
    name: 'Ravi'
  }
}

export class Guru {
  id: number
  name: string
}