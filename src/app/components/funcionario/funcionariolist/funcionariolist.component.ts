import { Component, inject } from '@angular/core';
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

  objetoSelecionadoParaEdicao: Funcionario = new Funcionario();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  funcionarioService = inject(FuncionarioService);

  constructor() {

    this.listAll();
  }


  listAll() {

    this.funcionarioService.listAll().subscribe({
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
