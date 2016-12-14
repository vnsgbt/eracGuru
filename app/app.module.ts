import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule }   from '@angular/forms'
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import './rxjs-extensions';

import { AppComponent }  from './app.component';
import { GuruDetailComponent } from './guru-detail.component'
import { GurusComponent } from './gurus.component'
import { GuruService } from './guru.service'
import { DashboardComponent } from './dashboard.component'
import { GuruSearchComponent } from './guru-search.component'

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [ 
    AppComponent, 
    GuruDetailComponent,
    DashboardComponent, 
    GurusComponent,
    GuruSearchComponent
  ],
  providers:    [ GuruService ],
  bootstrap:    [ AppComponent ],
})

export class AppModule { }
