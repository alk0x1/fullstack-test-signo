import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { EnqueteInput, OpcoesDeRespostaInput } from "../@types/enquete";


export const enqueteServices = {
  save: async (enquete: EnqueteInput) => {
    prisma.opcoesDeResposta.createMany({data: [{titulo: "a"}]})

    return await prisma.enquete.create(
      {data: {
        data_fim: enquete.data_fim,
        data_inicio: enquete.data_inicio,
        titulo: enquete.titulo,
      }
    });    
  },
  getAll: async () => {
    return await prisma.enquete.findMany();
  },
  get: async (id: string) => {
    return await prisma.enquete.findUnique({where: {id: id}});
  },
  delete: async (id: number) => {
    // return await prisma.enquete.delete({where: { id: id}});
  },
  update: async (data: any) => {
    return await prisma.enquete.update(data);
  }
}

 