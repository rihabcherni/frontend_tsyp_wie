import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisiteurModule } from './visiteur/visiteur.module';
import { AdminModule } from './admin/admin.module';
import { DonateurModule } from './donateur/donateur.module';
import { ResponsableEcoleModule } from './responsable-ecole/responsable-ecole.module';
import { AuthModule } from './auth/auth.module';
import { Page404Component } from './visiteur/page404/page404.component';
import 'bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VisiteurModule,
    AdminModule,
    DonateurModule,
    ResponsableEcoleModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
