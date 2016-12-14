import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule }   from '@angular/forms'

import { AppComponent }  from './app.component';
import { GuruDetailComponent } from './guru-detail.component'
import { GurusComponent } from './gurus.component'
import { GuruService } from './guru.service'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, GuruDetailComponent, GurusComponent ],
  providers:    [ GuruService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
