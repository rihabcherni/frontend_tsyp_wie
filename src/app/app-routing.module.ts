import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent as AdminHomeComponent } from './admin/home/home.component';
import { HomeComponent as VisiteurHomeComponent } from './visiteur/home/home.component';
import {  HomeComponent as ResposableHomeComponent  } from './responsable-ecole/home/home.component';
import {  HomeComponent as LivreurHomeComponent  } from './livreur/home/home.component';
import {  HomeComponent as DonateurHomeComponent  } from './donateur/home/home.component';
const routes: Routes = [
  { path: '', component: VisiteurHomeComponent },
  { path: 'admin', component: AdminHomeComponent },
  { path: 'responsable-ecole', component: ResposableHomeComponent },
  { path: 'livreur', component: LivreurHomeComponent },
  { path: 'donateur', component: DonateurHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
