import { ClienteDTO } from "./cliente";
import { Estado } from "./enums/estado";
import { FuncionarioDTO } from "./funcionario";
import { Produto } from "./produto";

export class Pedido {

    id?: number;
    numeroPedido?: number;
    entregar?: boolean;
    cliente?: ClienteDTO;
    produtos?: Produto[];
    estado?: Estado;
    valorTotal?: number = 0;
    descricao?: string;
    funcionario?: FuncionarioDTO;

}
