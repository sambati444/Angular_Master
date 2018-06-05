import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { AuthenticateService } from './services/Authenticate.service';
import { Authenticate } from './components/Authentication/AuthenticateComponent';
import {HomePage} from './components/HomePage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    Authenticate,
    HomePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
		  {
			path: 'home',
			component: HomePage
      },
      {
       path:'',
       component:Authenticate
      }
		]),
    HttpModule
  ],
  providers: [AuthenticateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
