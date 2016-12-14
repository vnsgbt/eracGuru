import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule }   from '@angular/forms'

import { AppComponent }  from './app.component';
import { GuruDetailComponent } from './guru-detail.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, GuruDetailComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
