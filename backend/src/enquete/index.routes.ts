import { Router } from "express";
import { enqueteServices } from "./enquete.services";
import { enqueteControllers } from "./enquete.controllers";
import { EnqueteInput } from "../@types/enquete";

export const enqueteRoutes = (): Router => {
  const router = Router();
  
  router.post('/createEnquete', async (req, res) => {
    const enquete: EnqueteInput = req.body;
    return res.json(await enqueteControllers.create(enquete));
  });

  router.get('/getAll', async (req, res) => {
    return res.json(await enqueteServices.getAll());
  });
  
  router.get('/get/:id', async (req, res) => {
    const id: string = req.params.id;
    console.log('id:', id);
    return res.json(await enqueteServices.get(id));
  });

  router.delete('/delete/:id', async (req, res) => {
    const id: string = req.params.id;
    console.log('id:', id);
    return res.json(await enqueteServices.get(id));
  });

  return router;
}
