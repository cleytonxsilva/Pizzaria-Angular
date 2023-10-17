import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { IndexComponent } from './components/layout/index/index.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { ClientedetailsComponent } from './components/cliente/clientedetails/clientedetails.component';
import { ClientelistComponent } from './components/cliente/clientelist/clientelist.component';
import { EnderecodetailsComponent } from './components/endereco/enderecodetails/enderecodetails.component';
import { EnderecolistComponent } from './components/endereco/enderecolist/enderecolist.component';
import { FuncionariodetailsComponent } from './components/funcionario/funcionariodetails/funcionariodetails.component';
import { FuncionariolistComponent } from './components/funcionario/funcionariolist/funcionariolist.component';
import { PedidodetailsComponent } from './components/pedido/pedidodetails/pedidodetails.component';
import { PedidolistComponent } from './components/pedido/pedidolist/pedidolist.component';
import { ProdutodetailsComponent } from './components/produto/produtodetails/produtodetails.component';
import { ProdutolistComponent } from './components/produto/produtolist/produtolist.component';
import { SabordetailsComponent } from './components/sabor/sabordetails/sabordetails.component';
import { SaborlistComponent } from './components/sabor/saborlist/saborlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    ClientedetailsComponent,
    ClientelistComponent,
    EnderecodetailsComponent,
    EnderecolistComponent,
    FuncionariodetailsComponent,
    FuncionariolistComponent,
    PedidodetailsComponent,
    PedidolistComponent,
    ProdutodetailsComponent,
    ProdutolistComponent,
    SabordetailsComponent,
    SaborlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
