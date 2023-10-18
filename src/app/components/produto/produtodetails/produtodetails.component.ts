import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtodetails',
  templateUrl: './produtodetails.component.html',
  styleUrls: ['./produtodetails.component.scss']
})
export class ProdutodetailsComponent {
  @Input() produto: Produto = new Produto();
  @Output() retorno = new EventEmitter<Produto>();

  produtoService = inject(ProdutoService);


  constructor() {

  }

  salvar() {
    //ISSO AQUI SERVE PARA EDITAR OU ADICIONAR... TANTO FAZ

    this.produtoService.save(this.produto).subscribe({
      next: produto => { // QUANDO DÁ CERTO
        this.retorno.emit(produto);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }
}
