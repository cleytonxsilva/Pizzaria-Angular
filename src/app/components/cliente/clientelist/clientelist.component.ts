import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
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

  @Output() retorno = new EventEmitter<Cliente>();
  @Input() modoLancamento: boolean = false;

  ClienteSelecionadoParaEdicao: Cliente = new Cliente();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  clienteService = inject(ClienteService);

  constructor() {

    this.listAll();


  }


  listAll() {

    this.clienteService.listAll().subscribe({
      next: lista => { 
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  adicionar(modal: any) {
    this.ClienteSelecionadoParaEdicao = new Cliente();

    this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, cliente: Cliente, indice: number) {
    this.ClienteSelecionadoParaEdicao = Object.assign({}, cliente); 
    this.indiceSelecionadoParaEdicao = indice;

    this.modalService.open(modal, { size: 'md' });
  }

  addOuEditarEndereco(cliente: Cliente) {

    this.listAll();


    this.modalService.dismissAll();

  }
  excluir(id: number) {
    if (confirm('Deseja realmente excluir este endereco?')) {
      this.clienteService.delete(id).subscribe({
        next: () => {
          this.lista = this.lista.filter(cliente => cliente.id !== id);
        },
        error: erro => {
          alert('Ocorreu um erro ao excluir o endereço. Confira o console para mais informações.');
          console.error(erro);
        }
      });
    }
  }
  
  lancamento(cliente: Cliente){
    this.retorno.emit(cliente);
  }
}
