import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  
  API: string = 'http://localhost:8080/api/pedidos';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.API);
  }

  save(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.API, pedido);
  }

  exemploErro(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.API + '/erro');
  }

  /*
  CASO PRECISE ENVIAR REQUEST PARAMS, BASTA DECLARAR ASSIM E INCLUIR NA REQUISIÇÃO HTTP

  let params = new HttpParams()
      .set('empresaId', empresaId.toString())

  return this.http.get<Pessoa[]>(this.API, { params: params});

  
  
  SE PRECISAR COLOCAR COISAS NO HEADER DA REQUISIÇÃO


      let headers = new HttpHeaders()
      .set("Content-Type", "application/json");


        return this.http.get<Pessoa[]>(this.API, { headers: headers});
  */
}
