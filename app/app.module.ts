import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule }   from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AppComponent }  from './app.component';
import { GuruDetailComponent } from './guru-detail.component'
import { GurusComponent } from './gurus.component'
import { GuruService } from './guru.service'
import { DashboardComponent } from './dashboard.component'

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot([
      {
        path: 'gurus',
        component: GurusComponent    
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ])  
  ],
  declarations: [ 
    AppComponent, 
    GuruDetailComponent,
    DashboardComponent, 
    GurusComponent 
  ],
  providers:    [ GuruService ],
  bootstrap:    [ AppComponent ],
})

export class AppModule { }
