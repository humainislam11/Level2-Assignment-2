import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import {  BikeRoutes } from './modules/bike/bike.route';
import { OrderRoute } from './modules/bikeOrder/order.router';
const app: Application = express();

//parser

app.use(express.json());
app.use(cors());

//application router
app.use('/api/v1/bikes', BikeRoutes);
app.use('/api/v1/orderBike',OrderRoute)



const getAController = (req: Request, res: Response)=>{

  const a = 10;
  res.json({value: a})

}
app.get('/',getAController)
export default app;
