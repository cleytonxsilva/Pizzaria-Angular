import { Endereco } from "./endereco";

export class Cliente {

    id!: number;
    cpf!: string;
    nome!: string;
    idade!: number;
    telefone!: string;
    endereco!: Endereco[];

}

export class ClienteDTO {
    id?: number;
    cpf?: string;
    nome?: string;
    idade?: number;
    telefone?: string;
    endereco?: Endereco[];
}

