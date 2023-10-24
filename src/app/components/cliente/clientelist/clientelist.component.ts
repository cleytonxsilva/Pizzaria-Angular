import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientelist',
  templateUrl: './clientelist.component.html',
  styleUrls: ['./clientelist.component.scss']
})
export class ClientelistComponent {

  lista: Cliente[] = [];

  objetoSelecionadoParaEdicao: Cliente = new Cliente();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  clienteService = inject(ClienteService);

  constructor() {

    this.listAll();
  }


  listAll() {

    this.clienteService.listAll().subscribe({
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
