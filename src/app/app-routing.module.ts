import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './core/guards/auth.guard';
import { DegreesComponent } from './pages/degrees/degrees.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'sitio', pathMatch: 'full' },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'degrees', component: DegreesComponent },
  {path:'admin',	component:AdminComponent, canActivate: [AuthGuard]},
  {path:'login',	component:LoginComponent},
  { path: 'proyectos', loadChildren: () => import('./pages/proyectos/proyectos.module').then(m => m.ProyectosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
