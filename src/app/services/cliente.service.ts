import { Injectable, inject } from '@angular/core';
import { Cliente } from '../models/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  API: string = 'http://localhost:8080/clientes';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API + '/listar');
  }
}
