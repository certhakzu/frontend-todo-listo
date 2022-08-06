import { AuthComponent } from './../pages/auth/auth.component';
import { RegisterComponent } from './../pages/register/register.component';
import { LoginComponent } from './../pages/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const Routes:Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(Routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
