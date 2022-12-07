import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthLayoutRoutingModule } from './auth-layout-routing.module';




@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthLayoutRoutingModule

  ]
})
export class AuthLayoutModule { }
