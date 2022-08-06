import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'login',
    loadChildren: () => import('./auth/auth/auth.module') // Es una promesa
    .then(m => m.AuthModule)
  },
  {
    path: 'listas',
    loadChildren: () => import('./todo-listo/listas/listas.module')
    .then(m => m.ListasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
