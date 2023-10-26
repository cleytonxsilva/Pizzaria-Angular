import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
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

  clienteId: number = 0;
  funcionarioId: number = 0;
  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  pedidoService = inject(PedidoService);
  isEdit!: string;


  constructor() {

  }

  salvar() {
    console.log(this.pedido);
    this.pedido.cliente = {id: this.clienteId};
    this.pedido.funcionario = {id: this.funcionarioId};

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
  excluir(produto: Produto, indice: number) {

    this.pedido.produtos!.splice(indice, 1);

  }

  retornoProdutosList(produto: Produto) {

    if (this.pedido.produtos == null) {
      this.pedido.produtos = [];
      this.pedido.produtos.push(produto);
      this.modalRef.dismiss();
    }
  }


  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }

  // calcularValorTotal() {
  //   if (this.pedido.produtos && this.pedido.produtos.length > 0) {
  //     this.pedido.valorTotal = this.pedido.produtos.reduce((total, produto) => {
  //       return total + produto.valorProduto;
  //     }, 0);
  //   } else {
  //     this.pedido.valorTotal = 0;
  //   }
  // }
}
