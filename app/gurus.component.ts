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

  add(name: string) {
    name = name.trim()
    if (!name) {return}
    this.guruService.create(name)
      .then(guru => {
        this.gurus.push(guru)
        this.selectedGuru = null
      })
  }

  delete(guru: Guru) {
    this.guruService
      .delete(guru.id)
      .then(()=>{
        this.gurus = this.gurus.filter(g => g !== guru)
        if (this.selectedGuru === guru) {this.selectedGuru = null}
      })
  }
}
