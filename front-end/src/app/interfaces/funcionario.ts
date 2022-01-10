import { IMedico } from "./medico";

export interface IFuncionario {
	codigo?: number;
	dataContrato: string | Date;
	salario: number;
	senhaHash: string;

	medico?: IMedico;
}
