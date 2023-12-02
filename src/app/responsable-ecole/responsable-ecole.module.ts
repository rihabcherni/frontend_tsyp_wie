import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResponsableEcoleComponent } from './responsable-ecole.component';
import { GestionListeBesoinsEcoleComponent } from './components/gestion-liste-besoins-ecole/gestion-liste-besoins-ecole.component';
import { DashboardResponsableComponent } from './components/dashboard-responsable/dashboard-responsable.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    ResponsableEcoleComponent,
    GestionListeBesoinsEcoleComponent,
    DashboardResponsableComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ResponsableEcoleModule { }
