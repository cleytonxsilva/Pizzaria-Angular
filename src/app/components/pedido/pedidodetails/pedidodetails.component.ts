import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/models/cliente';
import { Estado } from 'src/app/models/enums/estado';
import { Pedido } from 'src/app/models/pedido';
import { Produto } from 'src/app/models/produto';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedidodetails',
  templateUrl: './pedidodetails.component.html',
  styleUrls: ['./pedidodetails.component.scss']
})
export class PedidodetailsComponent {

  @Input() pedido: Pedido = new Pedido();
  @Output() retorno = new EventEmitter<Pedido>();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  pedidoService = inject(PedidoService);
  isEdit!: string;


  constructor() {

  }

  salvar() {
    this.pedido.id > 0;
    if (this.isEdit) {
      // Modo de edição
      this.pedidoService.update(this.pedido).subscribe({
        next: pedido => {
          this.retorno.emit(pedido);
        },
        error: erro => {
          alert('Deu erro! Observe o erro no console!');
          console.error(erro);
        }
      });
    } else {
      this.pedidoService.save(this.pedido).subscribe({
        next: pedido => {
          this.retorno.emit(pedido);
        },
        error: erro => {
          alert('Deu erro! Observe o erro no console!');
          console.error(erro);
        }
      });
    }
  }
  excluir(produto: Produto, indice: number) {

    this.pedido.produtos.splice(indice, 1);

  }

  retornoProdutosList(produto: Produto) {

    if (this.pedido.produtos == null) {
      this.pedido.produtos = [];
      this.pedido.produtos.push(produto);
      this.modalRef.dismiss();

      if (this.pedido.cliente == null) {
        this.pedido.cliente = new Cliente(); ///CLIENTE NULO
      }
    }
  
  }


  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }
}
