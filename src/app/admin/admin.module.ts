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

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    GestionResponsableComponent,
    GestionEcoleComponent,
    GestionDonateurComponent,
    GestionUtilisateurComponent,
    SchoolNeedsListManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminModule { }
