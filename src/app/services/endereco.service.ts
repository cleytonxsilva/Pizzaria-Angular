import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../models/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService{

  API: string = 'http://localhost:8080/enderecos';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.API + '/listar');
  }
}
