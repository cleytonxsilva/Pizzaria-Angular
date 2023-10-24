import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Endereco } from 'src/app/models/endereco';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-enderecolist',
  templateUrl: './enderecolist.component.html',
  styleUrls: ['./enderecolist.component.scss']
})
export class EnderecolistComponent {
  lista: Endereco[] = [];

  objetoSelecionadoParaEdicao: Endereco = new Endereco();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  enderecoService = inject(EnderecoService);

  constructor() {

    this.listAll();
  }


  listAll() {

    this.enderecoService.listAll().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        alert('Deu erro! Observe no console.');
        console.error(erro);
      }
    });

  }
}
