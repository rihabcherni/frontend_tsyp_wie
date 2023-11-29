import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ProfilComponent } from './components/profil/profil.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ChangePasswordComponent,
    AuthComponent,
    ProfilComponent
  ],
  imports: [
    CommonModule,   
    RouterModule
  ]
})
export class AuthModule { }
