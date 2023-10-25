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
  save(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.API + '/cadastrar', cliente);
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.API}/${cliente.id}`, cliente);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
