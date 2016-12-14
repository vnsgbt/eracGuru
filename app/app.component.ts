import { Component, OnInit } from '@angular/core'

import { GuruService } from './guru.service'
import { Guru } from './guru'

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
    <my-guru-detail [guru]="selectedGuru"></my-guru-detail>
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
  providers: [GuruService]
})

export class AppComponent implements OnInit {
  title = 'Erac Gurus' 

  gurus: Guru[]
  selectedGuru: Guru

  onSelect(guru: Guru) {
    this.selectedGuru = guru
  }

  constructor(private guruService: GuruService){}
  
  ngOnInit(){
    this.getGurus()
  }

  getGurus(){
    this.gurus = this.guruService.getGurus()
  }
}
