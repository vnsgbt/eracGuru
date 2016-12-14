import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Params }   from '@angular/router'
import { Location }                 from '@angular/common'

import 'rxjs/add/operator/switchMap'

import { GuruService } from './guru.service'
import { Guru } from './guru'

@Component({
  moduleId: module.id,
  selector: 'my-guru-detail',
  templateUrl: 'partial/guru-detail.component.html'
})

export class GuruDetailComponent implements OnInit {
    ngOnInit(){
      this.route.params
        .switchMap((params: Params) => this.guruService.getGuru(+params['id']))
        .subscribe(guru => this.guru = guru)
    }

    goBack() {
      this.location.back()
    }

    @Input() guru: Guru 
    
    constructor(
      private guruService: GuruService,
      private route: ActivatedRoute,
      private location: Location
    ){}
}
