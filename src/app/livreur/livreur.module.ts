import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LivreurComponent } from './livreur.component';
import { ConsulterDemandesDonsComponent } from './components/consulter-demandes-dons/consulter-demandes-dons.component';
import { HistoriqueDonsFaitComponent } from './components/historique-dons-fait/historique-dons-fait.component';
import { ConfirmeDemandeComponent } from './components/confirme-demande/confirme-demande.component';

@NgModule({
  declarations: [
    LivreurComponent,
    ConsulterDemandesDonsComponent,
    HistoriqueDonsFaitComponent,
    ConfirmeDemandeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LivreurModule { }
