import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import {  VisiteurComponent } from './visiteur/visiteur.component';
import { ResponsableEcoleComponent  } from './responsable-ecole/responsable-ecole.component';
import { DonateurComponent  } from './donateur/donateur.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { ChangePasswordComponent } from './auth/components/change-password/change-password.component';
import { ProfilComponent } from './auth/components/profil/profil.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { GestionDonateurComponent } from './admin/components/gestion-donateur/gestion-donateur.component';
import { GestionResponsableComponent } from './admin/components/gestion-responsable/gestion-responsable.component';
import { GestionEcoleComponent } from './admin/components/gestion-ecole/gestion-ecole.component';
import { GestionUtilisateurComponent } from './admin/components/gestion-utilisateur/gestion-utilisateur.component';
import { DashboardResponsableComponent } from './responsable-ecole/components/dashboard-responsable/dashboard-responsable.component';
import { GestionListeBesoinsEcoleComponent } from './responsable-ecole/components/gestion-liste-besoins-ecole/gestion-liste-besoins-ecole.component';
import { SchoolNeedsListManagementComponent } from './admin/components/school-needs-list-management/school-needs-list-management.component';
import { HistoriqueDonsComponent } from './donateur/components/historique-dons/historique-dons.component';
import { ListeBesoinsComponent } from './donateur/components/liste-besoins/liste-besoins.component';
import { AboutUsComponent } from './visiteur/components/about-us/about-us.component';
import { ContactUsComponent } from './visiteur/components/contact-us/contact-us.component';
import { DonationFormComponent } from './visiteur/components/donation-form/donation-form.component';
import { CausesComponent } from './visiteur/components/causes/causes.component';
import { Page404Component } from './visiteur/page404/page404.component';
import { HomeComponent } from './visiteur/components/home/home.component';
const routes: Routes = [
  { path: '', component: VisiteurComponent, children:[
      {path:'', component: HomeComponent},
      {path:'about-us', component: AboutUsComponent},
      {path:'our-causes', component: CausesComponent},
      {path:'donation', component: DonationFormComponent},
      {path:'contact-us', component: ContactUsComponent},
      {path:'login', component:LoginComponent},
      {path:'signup', component:SignupComponent},
      {path:'change-password', component:ChangePasswordComponent},
  ]},
  { path: 'admin', component: AdminComponent,children:[
    {path:'', component:DashboardComponent},
    {path:'schools', component:GestionEcoleComponent},
    {path:'users', component:GestionUtilisateurComponent},
    {path:'profil', component:ProfilComponent},

    {path:'donor-management', component:GestionDonateurComponent},
    {path:'ambassador-management', component:GestionResponsableComponent},
    {path:'school-needs-list-management', component:SchoolNeedsListManagementComponent},

  ] },
  { path: 'ambassador', component: ResponsableEcoleComponent ,children:[// responsable-ecole
    {path:'', component:DashboardResponsableComponent},
    {path:'school-needs-management', component:GestionListeBesoinsEcoleComponent},
  ] },
  { path: 'donateur', component: DonateurComponent, children:[
    {path:'History-donations-made', component:HistoriqueDonsComponent},
    {path:'school-needs-list', component:ListeBesoinsComponent},
  ] },
  { path: '**', redirectTo: '/not-found' },
  { path: 'not-found', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
