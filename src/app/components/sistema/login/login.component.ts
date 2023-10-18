import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  roteador = inject(Router);

  funcionario: Funcionario = new Funcionario();

  logar() {
    if (this.funcionario.matricula == 1234567) {
      this.roteador.navigate(['/admin/pedido']);
    } else {
      alert("Matricula incorreta!");
    }
  }
}
