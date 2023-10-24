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
}
