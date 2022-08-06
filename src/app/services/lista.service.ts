import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lista } from 'src/interface/listaInterface';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private url = "api";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) { }

  guardarLista(lista: Lista):Observable<Lista>{
    return this.http.post<Lista>(`${this.url}/crearlista`, lista, this.httpOptions);
  }

  listar():Observable<Lista[]>{
    return this.http.get<Lista[]>(`${this.url}/listarlistas`);
  }

}
