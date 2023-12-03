import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { BeDonorComponent } from './components/be-donor/be-donor.component';
import { BeAmbassadorComponent } from './components/be-ambassador/be-ambassador.component';
import { ProfilAdminComponent } from './components/profil-admin/profil-admin.component';
import { ProfilAmbassadorComponent } from './components/profil-ambassador/profil-ambassador.component';
import { ProfilDonorComponent } from './components/profil-donor/profil-donor.component';

@NgModule({
  declarations: [
    LoginComponent,
    ChangePasswordComponent,
    AuthComponent,
    BeDonorComponent,
    BeAmbassadorComponent,
    ProfilAdminComponent,
    ProfilAmbassadorComponent,
    ProfilDonorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModule { }
