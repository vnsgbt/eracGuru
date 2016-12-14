import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { GuruService } from './guru.service'
import { Guru } from './guru'

@Component({
  moduleId: module.id,
  selector: 'my-gurus',
  templateUrl: '../app/partial/gurus.component.html',
  styleUrls: ['../app/partial/gurus.component.css',],
})

export class GurusComponent implements OnInit {

  gurus: Guru[]
  selectedGuru: Guru

  onSelect(guru: Guru) {
    this.selectedGuru = guru
  }

  constructor(
    private guruService: GuruService,
    private router: Router){}
  
  ngOnInit(){
    this.getGurus()
  }

  getGurus(){
    this.guruService.getGurus().then(gurus => this.gurus = gurus)
  }

  gotoDetail(){
    this.router.navigate(['/detail', this.selectedGuru.id])
  }
}
