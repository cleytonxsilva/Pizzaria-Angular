import { Pedido } from "./pedido";

export class Funcionario {

    id!: number;
    cpf!: string;
    nome!: string;
    telefone!: number;
    matricula!: number;
}

export class FuncionarioDTO{
    id?: number;
    cpf?: string;
    nome?: string;
    telefone?: number;
    matricula?: number;
}
