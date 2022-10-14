import express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import { routes } from './index.routes';
dotenv.config();


const app = express()
app.use(bodyParser.json());
app.use(routes());

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started in port", process.env.PORT || 3000);
});

