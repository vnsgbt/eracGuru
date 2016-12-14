import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Gurus</h2>
    <ul>
      <li *ngFor="let guru of gurus"
        (click)="onSelect(guru)">
        <span>{{guru.id}}</span> {{guru.name}}
      </li>
    </ul>
    <div *ngIf="selectedGuru">
      <h2>{{selectedGuru.name}} details!</h2>
      <div><label>id: </label>{{selectedGuru.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedGuru.name" placeholder="name"/>
      </div>
    </div>
  `,
})

export class AppComponent  {
  title = 'Erac Gurus' 
  gurus = GURUS
  selectedGuru: Guru

  onSelect(guru: Guru) {
    this.selectedGuru = guru
  }
}

export class Guru {
  id: number
  name: string
}

let GURUS: Guru[] = [
  { id: 11, name: 'Wendy'},
  { id: 12, name: 'Adam'},
  { id: 13, name: 'Anantha'},
  { id: 13, name: 'Shaul'},
  { id: 13, name: 'Jon'},
  { id: 14, name: 'Dan'},
  { id: 15, name: 'Rich'},
  { id: 16, name: 'Harita'},
  { id: 17, name: 'Tim'},
  { id: 18, name: 'Steve'},
]