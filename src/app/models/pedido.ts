import { Cliente } from "./cliente";
import { Estado } from "./enums/estado";
import { Funcionario } from "./funcionario";
import { Produto } from "./produto";

export class Pedido {

    id!: number;
    numeroPedido!: number;
    entregar!: boolean;
    cliente!: Cliente;
    produtos!: Produto[];
    estado!: Estado;
    valorTotal!: number;
    descricao!: string;
    funcionario!: Funcionario;

}
