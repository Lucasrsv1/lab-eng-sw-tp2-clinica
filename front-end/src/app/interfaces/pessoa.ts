import { IFuncionario } from "./funcionario";

export interface IPessoa {
	codigo?: number;
	nome: string;
	email: string;
	telefone: string;
	cep: string;
	logradouro: string;
	bairro: string;
	cidade: string;
	estado: string;

	funcionario?: IFuncionario;
}
