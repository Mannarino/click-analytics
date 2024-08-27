import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './sitio/about-me/about-me.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './core/guards/auth.guard';
import { DegreesComponent } from './sitio/degrees/degrees.component';
import { LoginComponent } from './login/login.component';
import { ProyectsComponent } from './sitio/proyects/proyects.component';
import { SitioComponent } from './sitio/sitio.component';

const routes: Routes = [
  { path: '', redirectTo: 'sitio', pathMatch: 'full' },
  {
    path: 'sitio',
    component: SitioComponent,
    children: [
      { path: 'about-me', component: AboutMeComponent },
      { path: 'degrees', component: DegreesComponent },
      { path: 'proyects', component: ProyectsComponent },
    ],
  },
  {path:'admin',	component:AdminComponent, canActivate: [AuthGuard]},
  {path:'login',	component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
