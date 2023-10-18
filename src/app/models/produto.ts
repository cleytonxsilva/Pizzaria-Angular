import { Tamanho } from "./enums/tamanho";
import { Pedido } from "./pedido";
import { Sabor } from "./sabor";

export class Produto {

    id!: number;
    nome!: string;
    tamanho!: Tamanho;
    valorProduto!: number;
    sabores!: Sabor[];
    pedidos!: Pedido[];
}
