import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { GestionResponsableComponent } from './components/gestion-responsable/gestion-responsable.component';
import { GestionEcoleComponent } from './components/gestion-ecole/gestion-ecole.component';
import { GestionDonateurComponent } from './components/gestion-donateur/gestion-donateur.component';
import { GestionUtilisateurComponent } from './components/gestion-utilisateur/gestion-utilisateur.component';
import { SchoolNeedsListManagementComponent } from './components/school-needs-list-management/school-needs-list-management.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DonationsComponent } from './components/donations/donations.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    GestionResponsableComponent,
    GestionEcoleComponent,
    GestionDonateurComponent,
    GestionUtilisateurComponent,
    SchoolNeedsListManagementComponent,
    SideBarComponent,
    DonationsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminModule { }
