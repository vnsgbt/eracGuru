import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule }   from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AppComponent }  from './app.component';
import { GuruDetailComponent } from './guru-detail.component'
import { GurusComponent } from './gurus.component'
import { GuruService } from './guru.service'
import { DashboardComponent } from './dashboard.component'

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    AppRoutingModule
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
