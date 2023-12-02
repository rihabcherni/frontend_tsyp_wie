import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DonateurComponent } from './donateur.component';
import { ListeBesoinsComponent } from './components/liste-besoins/liste-besoins.component';
import { HistoriqueDonsComponent } from './components/historique-dons/historique-dons.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    DonateurComponent,
    ListeBesoinsComponent,
    HistoriqueDonsComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DonateurModule { }
