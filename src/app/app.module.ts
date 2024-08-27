import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './sitio/about-me/about-me.component';

import { DegreesComponent } from './sitio/degrees/degrees.component';
import { ProyectsComponent } from './sitio/proyects/proyects.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SitioComponent } from './sitio/sitio.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,

    DegreesComponent,
    ProyectsComponent,
    AdminComponent,
    LoginComponent,
    SitioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
