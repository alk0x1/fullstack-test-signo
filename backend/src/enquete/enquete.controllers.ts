import { EnqueteInput, OpcoesDeRespostaInput } from "../@types/enquete";
import { PrismaClient } from '@prisma/client';
import { enqueteServices } from "./enquete.services";

const prisma = new PrismaClient();


export const enqueteControllers = {
  create: async (enqueteInput: EnqueteInput) => {
    const enquete = await enqueteServices.save(enqueteInput);
    let data: OpcoesDeRespostaInput[] = [];

    enqueteInput.opcoes_de_resposta.map((element) => {
      data.push({titulo: element, enquete_id: enquete.id});
    });

    await prisma.opcoesDeResposta.createMany({
      data: data
    });

    return enquete;
  },
  get: async (id: string) => {
    const enquete = await enqueteServices.get(id);
    const options = await prisma.opcoesDeResposta.findMany({ where: {enquete_id: enquete.id} });
    let optionTitles: string[] = [];

    options.map((op) => {
      optionTitles.push(op.titulo);
    });

    console.log("options: ", options);

    return {
      titulo: enquete.titulo,
      data_inicio: enquete.data_inicio,
      data_fim: enquete.data_fim,
      opcoes_de_resposta: optionTitles,
    } as EnqueteInput;
  },
  delete: async (id: string) => {
    enqueteServices.delete(id);
    prisma.opcoesDeResposta.deleteMany({where: {enquete_id: id }});
  }
}