import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtolist',
  templateUrl: './produtolist.component.html',
  styleUrls: ['./produtolist.component.scss']
})
export class ProdutolistComponent {

  lista: Produto[] = [];

  @Output() retorno = new EventEmitter<Produto>();
  @Input() modoLancamento: boolean = false;


  objetoSelecionadoParaEdicao: Produto = new Produto();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  produtoService = inject(ProdutoService);

  constructor() {

    this.listAll();
  }

  listAll() {

    this.produtoService.listAll().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }
  // MÉTODOS DA MODAL

  adicionar(modal: any) {
    this.objetoSelecionadoParaEdicao = new Produto();
    this.indiceSelecionadoParaEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, produto: Produto, indice: number) {
    this.objetoSelecionadoParaEdicao = Object.assign({}, produto); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
    this.indiceSelecionadoParaEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }
  excluir(id: number) {
    if (confirm('Deseja realmente excluir este produto?')) {
      this.produtoService.delete(id).subscribe({
        next: () => {
          this.lista = this.lista.filter(produto => produto.id !== id);
        },
        error: erro => {
          alert('Ocorreu um erro ao excluir o produto. Confira o console para mais informações.');
          console.error(erro);
        }
      });
    }
  }

  addOuEditarProduto(produto: Produto) {

    this.listAll();

    this.modalService.dismissAll();
  }


  lancamento(produto: Produto){
    this.retorno.emit(produto);
  }
}
