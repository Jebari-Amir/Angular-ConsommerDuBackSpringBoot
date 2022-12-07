import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutModule } from './auth-layout/auth-layout.module';
import { ClientLayoutModule } from './client-layout/client-layout.module';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DepartementComponent } from './components/departement/departement.component';
import { ListDepartementComponent } from './components/list-departement/list-departement.component';
import { ListedepComponent } from './components/listedep/listedep.component';





@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    DepartementComponent,
    ListDepartementComponent,
    ListedepComponent

    
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AuthLayoutModule,
    ClientLayoutModule,
    AdminLayoutModule,
    HttpClientModule,
   
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
