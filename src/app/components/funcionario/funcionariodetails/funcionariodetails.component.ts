import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionariodetails',
  templateUrl: './funcionariodetails.component.html',
  styleUrls: ['./funcionariodetails.component.scss']
})
export class FuncionariodetailsComponent {
  @Input() funcionario: Funcionario = new Funcionario();
  @Output() retorno = new EventEmitter<Funcionario>();

  funcionarioService = inject(FuncionarioService);
  isEdit = false; 

  constructor() {

  }

  ngOnInit() {
    this.isEdit = this.funcionario.id > 0; 
  }

  salvar() {
    if (this.isEdit) {
      // Modo de edição
      this.funcionarioService.update(this.funcionario).subscribe({
        next: funcionario => {
          this.retorno.emit(funcionario);
        },
        error: erro => {
          alert('Deu erro! Observe o erro no console!');
          console.error(erro);
        }
      });
    } else {
      this.funcionarioService.save(this.funcionario).subscribe({
        next: funcionario => {
          this.retorno.emit(funcionario);
        },
        error: erro => {
          alert('Deu erro! Observe o erro no console!');
          console.error(erro);
        }
      });
    }
  }
}
