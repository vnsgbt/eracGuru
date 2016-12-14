import { Component, OnInit } from '@angular/core'

import { Guru } from './guru'
import { GuruService } from './guru.service' 

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'partial/dashboard.component.html',
})

export class DashboardComponent implements OnInit {
    
    gurus: Guru[] = []

    constructor(private guruService: GuruService){}
    
    ngOnInit() {
        this.guruService.getGurus()
            .then(gurus => this.gurus = gurus.slice(1,5))
    }
}
