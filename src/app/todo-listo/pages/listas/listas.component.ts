import { ListaService } from './../../../services/lista.service';
import { Lista } from './../../../../interface/listaInterface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  listas: Lista[] = [];
  constructor(private fb: FormBuilder, private lService: ListaService) { }

  ngOnInit(): void {
    this.cargarListas();
    console.log(this.listas);
  }

  formCrearLista:FormGroup = this.fb.group({ // agrupo todos los datos del formulario (y valida)
    nombreLista: ["", Validators.required]
  });

  fieldValidator(fiel: string) {
    return this.formCrearLista.controls?.[fiel].errors && this.formCrearLista.controls?.[fiel].touched
  }

  crearLista(nombre: string){
    const lista:Lista={
      id: null,
      nombre: nombre,
      tareas: []
    }
    this.lService.guardarLista(lista).subscribe(() => alert("creando Lista!"));
  }

  cargarListas(){
    this.lService.listar().subscribe(respuesta => this.listas.push(...respuesta));/* this.listas.push(...respuesta) */
  }
}
