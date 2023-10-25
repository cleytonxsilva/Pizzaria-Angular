import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  API: string = 'http://localhost:8080/funcionarios';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.API + '/listar');
  }
  save(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.API + '/cadastrar', funcionario);
  }

  update(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(`${this.API}/${funcionario.id}`, funcionario);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
