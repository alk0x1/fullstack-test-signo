import { Router } from "express";
import { enqueteRoutes } from './enquete/index.routes';

export const routes = (): Router => {
  const router = Router();
  router.get('/', function (req, res) {
    res.status(200).send('Ok')
  });

  router.use(enqueteRoutes());

  return router;
}
