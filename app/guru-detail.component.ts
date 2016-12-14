import { Component, Input } from '@angular/core'

import { Guru } from './guru'

@Component({
  selector: 'my-guru-detail',
  template: `
    <div *ngIf="guru">
        <h2>{{guru.name}} details!</h2>
        <div><label>id: </label>{{guru.id}}</div>
        <div>
        <label>name: </label>
        <input [(ngModel)]="guru.name" placeholder="name"/>
        </div>
    </div>
  `
})

export class GuruDetailComponent {
    @Input() guru: Guru 
}
