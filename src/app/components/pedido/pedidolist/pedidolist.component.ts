import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedidolist',
  templateUrl: './pedidolist.component.html',
  styleUrls: ['./pedidolist.component.scss']
})
export class PedidolistComponent {
  lista: Pedido[] = [];

  objetoSelecionadoParaEdicao: Pedido = new Pedido();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  pedidoService = inject(PedidoService);

  constructor() {

    this.listAll();
  }


  listAll() {

    this.pedidoService.listAll().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Deu erro! Observe o erro no console.');
        console.error(erro);
      }
    });

  }

  // MÉTODOS DA MODAL

  adicionar(modal: any) {
    this.objetoSelecionadoParaEdicao = new Pedido();
    // this.indiceSelecionadoParaEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  editar(modal: any, pedido: Pedido, indice: number) {
    console.log(pedido);
    this.objetoSelecionadoParaEdicao = Object.assign({}, pedido);
    this.indiceSelecionadoParaEdicao = indice;
    
    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  addOuEditarPedido(pedido: Pedido) {

    this.pedidoService.save(pedido);
  
    this.listAll();
  
    this.modalService.dismissAll();
  
  }

  excluir(id: number) {
    if (confirm('Deseja realmente excluir este pedido?')) {
      this.pedidoService.delete(id).subscribe({
        next: () => {
          this.lista = this.lista.filter(pedido => pedido.id !== id);
        },
        error: erro => {
          alert('Ocorreu um erro ao excluir o pedido. Confira o console para mais informações.');
          console.error(erro);
        }
      });
    }
  }






}
