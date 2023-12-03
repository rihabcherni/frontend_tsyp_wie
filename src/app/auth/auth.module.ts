import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ProfilComponent } from './components/profil/profil.component';
import { BeDonorComponent } from './components/be-donor/be-donor.component';
import { BeAmbassadorComponent } from './components/be-ambassador/be-ambassador.component';

@NgModule({
  declarations: [
    LoginComponent,
    ChangePasswordComponent,
    AuthComponent,
    ProfilComponent,
    BeDonorComponent,
    BeAmbassadorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModule { }
