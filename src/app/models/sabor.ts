import { Produto } from "./produto";

export class Sabor {
    id!: number;
    nome!: string;
    produto!: Produto;
    valorSabor!: number;
    descricao!: string;
}
