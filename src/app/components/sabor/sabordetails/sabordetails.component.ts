import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { Sabor } from 'src/app/models/sabor';
import { SaborService } from 'src/app/services/sabor.service';

@Component({
  selector: 'app-sabordetails',
  templateUrl: './sabordetails.component.html',
  styleUrls: ['./sabordetails.component.scss']
})
export class SabordetailsComponent {
  @Input() sabor: Sabor = new Sabor();
  @Output() retorno = new EventEmitter<Sabor>();

  saborService = inject(SaborService);
  isEdit = false; 

  constructor() {

  }

  ngOnInit() {
    this.isEdit = this.sabor.id > 0; 
  }

  salvar() {
    if (this.isEdit) {
      this.saborService.update(this.sabor).subscribe({
        next: sabor => {
          this.retorno.emit(sabor);
        },
        error: erro => {
          alert('Deu erro! Observe o erro no console!');
          console.error(erro);
        }
      });
    } else {
      this.saborService.save(this.sabor).subscribe({
        next: sabor => {
          this.retorno.emit(sabor);
        },
        error: erro => {
          alert('Deu erro! Observe o erro no console!');
          console.error(erro);
        }
      });
    }
  }
}
