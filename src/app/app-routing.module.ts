import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/sistema/login/login.component';
import { IndexComponent } from './components/layout/index/index.component';
import { PedidolistComponent } from './components/pedido/pedidolist/pedidolist.component';
import { ClientelistComponent } from './components/cliente/clientelist/clientelist.component';
import { ProdutolistComponent } from './components/produto/produtolist/produtolist.component';
import { EnderecolistComponent } from './components/endereco/enderecolist/enderecolist.component';
import { FuncionariolistComponent } from './components/funcionario/funcionariolist/funcionariolist.component';
import { SaborlistComponent } from './components/sabor/saborlist/saborlist.component';

const routes: Routes = [
  {path:'', redirectTo: "login", pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'admin', component: IndexComponent, children:[
    {path:'pedido', component: PedidolistComponent},
    {path: 'cliente', component: ClientelistComponent},
    {path: 'endereco', component: EnderecolistComponent},
    {path: 'funcionario', component: FuncionariolistComponent},
    {path: 'produto', component: ProdutolistComponent},
    {path: 'sabor', component: SaborlistComponent}
  ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
