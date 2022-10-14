export type Enquete = {
  id?: string;
  titulo: string;
  data_inicio: string;
  data_fim: string;
  opcoes_de_resposta: string[]
}

export type OpcoesDeResposta = {
  id?: string;
  titulo: string;
  enquete_id?: string;
}

// export type Result = {
//   option: string;
//   votes: number;
// }

export type Result = { [index: string]: number }
