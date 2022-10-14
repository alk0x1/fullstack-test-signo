import express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import { routes } from './index.routes';
import cors from 'cors';
dotenv.config();


const app = express()
app.use(bodyParser.json());
app.use(cors({ origin: `http://localhost:3000` }));
app.use(routes());

app.listen(process.env.PORT || 5001, () => {
  console.log("Server started in port", process.env.PORT || 3000);
});

