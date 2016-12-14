import { NgModule }             from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent }   from './dashboard.component'
import { GurusComponent }      from './gurus.component'
import { GuruDetailComponent }  from './guru-detail.component'

let routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: GuruDetailComponent },
  { path: 'gurus',     component: GurusComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}