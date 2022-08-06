import { ListasComponent } from './../pages/listas/listas.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { TareasComponent } from '../pages/tareas/tareas.component';



const Routes: Routes =[
  {
    path: '',
    component: ListasComponent,
    children: [
      {
        path: 'tareas/:id',
        component: TareasComponent
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
export class ListasRoutingModule { }
