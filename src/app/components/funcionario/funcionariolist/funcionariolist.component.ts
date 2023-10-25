import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionariolist',
  templateUrl: './funcionariolist.component.html',
  styleUrls: ['./funcionariolist.component.scss']
})
export class FuncionariolistComponent {

  lista: Funcionario[] = [];

  @Output() retorno = new EventEmitter<Funcionario>();
  @Input() modoLancamento: boolean = false;

  FuncionarioSelecionadoParaEdicao: Funcionario = new Funcionario();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  funcionarioService = inject(FuncionarioService);

  constructor() {

    this.listAll();


  }


  listAll() {

    this.funcionarioService.listAll().subscribe({
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
    this.FuncionarioSelecionadoParaEdicao = new Funcionario();

    this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, funcionario: Funcionario, indice: number) {
    this.FuncionarioSelecionadoParaEdicao = Object.assign({}, funcionario); 
    this.indiceSelecionadoParaEdicao = indice;

    this.modalService.open(modal, { size: 'md' });
  }

  addOuEditarEndereco(funcionario: Funcionario) {

    this.listAll();

  

    this.modalService.dismissAll();

  }
  excluir(id: number) {
    if (confirm('Deseja realmente excluir este endereco?')) {
      this.funcionarioService.delete(id).subscribe({
        next: () => {
          this.lista = this.lista.filter(endereco => endereco.id !== id);
        },
        error: erro => {
          alert('Ocorreu um erro ao excluir o endereco. Confira o console para mais informações.');
          console.error(erro);
        }
      });
    }
  }
  
  lancamento(funcionario: Funcionario){
    this.retorno.emit(funcionario);
  }
}
