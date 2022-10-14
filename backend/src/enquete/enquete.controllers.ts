import { EnqueteInput } from "../@types/enquete";
import { PrismaClient } from '@prisma/client';
import { enqueteServices } from "./enquete.services";
const prisma = new PrismaClient();


export const enqueteControllers = {
  create: async (enqueteInput: EnqueteInput) => {

    const enquete = await enqueteServices.save(enqueteInput);
    const options = await prisma.opcoesDeResposta.createMany({data: enqueteInput.opcoes_de_resposta})
    console.log("enquete: ", enquete);
    console.log("options: ", options);

    // const place = await prisma.places.create({ data: {

    // }});
  
    // const address = await prisma.addresses.create({
    //   data: { 

    // });

    // await prisma.places.update({ where: { id: place.id }, data: { addressesId: address.id }});

  }
}