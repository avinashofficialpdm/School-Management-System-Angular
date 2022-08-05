import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './WelcomePage/WelcomePage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { StudentLoginComponent } from './studentLogin/studentLogin.component';
import { AdminLoginComponent } from './adminLogin/adminLogin.component';
import { AdminInterfaceComponent } from './adminInterface/adminInterface.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddStudentComponent } from './adminInterface/addStudent/addStudent.component';
import { AdminNavbarComponent } from './adminInterface/adminNavbar/adminNavbar.component';

@NgModule({
  declarations: [				
    AppComponent,
      WelcomePageComponent,
      StudentLoginComponent,
      AdminLoginComponent,
      AdminInterfaceComponent,
      AddStudentComponent,
      AdminNavbarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
