import { ReactiveFormsModule } from '@angular/forms';
import { ListasComponent } from './../pages/listas/listas.component';
import { ListasRoutingModule } from './listas-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ListasComponent
  ],
  imports: [
    CommonModule,
    ListasRoutingModule,
    ReactiveFormsModule
  ]
})
export class ListasModule { }
