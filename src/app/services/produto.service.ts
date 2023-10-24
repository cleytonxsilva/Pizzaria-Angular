import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  API: string = 'http://localhost:8080/produtos';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API + '/listar');
  }

  save(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.API + '/cadastrar', produto);
  }
}
