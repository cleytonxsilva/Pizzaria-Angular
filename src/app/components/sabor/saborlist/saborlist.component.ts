import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Sabor } from 'src/app/models/sabor';
import { SaborService } from 'src/app/services/sabor.service';

@Component({
  selector: 'app-saborlist',
  templateUrl: './saborlist.component.html',
  styleUrls: ['./saborlist.component.scss']
})
export class SaborlistComponent {

  lista: Sabor[] = [];

  @Output() retorno = new EventEmitter<Sabor>();
  @Input() modoLancamento: boolean = false;


  objetoSelecionadoParaEdicao: Sabor = new Sabor();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  saborService = inject(SaborService);

  constructor() {

    this.listAll();
  }

  listAll() {

    this.saborService.listAll().subscribe({
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
    this.objetoSelecionadoParaEdicao = new Sabor();
    this.indiceSelecionadoParaEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, sabor: Sabor, indice: number) {
    this.objetoSelecionadoParaEdicao = Object.assign({}, sabor); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
    this.indiceSelecionadoParaEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }
  excluir(id: number) {
    if (confirm('Deseja realmente excluir este produto?')) {
      this.saborService.delete(id).subscribe({
        next: () => {
          this.lista = this.lista.filter(sabor => sabor.id !== id);
        },
        error: erro => {
          alert('Ocorreu um erro ao excluir o produto. Confira o console para mais informações.');
          console.error(erro);
        }
      });
    }
  }

  addOuEditarProduto(sabor: Sabor) {

    this.listAll();

    this.modalService.dismissAll();
  }


  lancamento(sabor: Sabor){
    this.retorno.emit(sabor);
  }
}
