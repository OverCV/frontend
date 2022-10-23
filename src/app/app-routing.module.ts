import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* Componentes generados */
import { LoginComponent } from './modules/security/login/login.component';
import { ResetPasswordComponent } from './modules/security/reset-password/reset-password.component';
import { NotFoundComponent } from './public/errors/not-found/not-found.component';
import { HomeComponent } from './public/master-page/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login/reset-password',
    component: ResetPasswordComponent
  },
  {
    /* Así redireccionaremos cuando el usuario ingrese a una ruta desconocida, como estas van en orden irá de última al chequear */
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }