import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Gurus</h2>
    <ul class="gurus">
      <li *ngFor="let guru of gurus"
        [class.selected]="guru === selectedGuru"
        (click)="onSelect(guru)">
        <span class="badge">{{guru.id}}</span> {{guru.name}}
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
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .gurus {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .gurus li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .gurus li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .gurus li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .gurus .text {
      position: relative;
      top: -3px;
    }
    .gurus .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
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