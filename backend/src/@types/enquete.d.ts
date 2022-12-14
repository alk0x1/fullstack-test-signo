export type EnqueteInput = {
  id?: string;
  titulo: string;
  data_inicio: string;
  data_fim: string;
  opcoes_de_resposta: string[];
}

export type OpcoesDeRespostaInput = {
  id?: string;
  titulo: string;
  enquete_id?: string;
}