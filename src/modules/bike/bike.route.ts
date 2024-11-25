import express from "express"
import { BikeController } from "./bike.controller"

const router = express.Router()

router.post('/create-bike', BikeController.createBike);

router.get('/',BikeController.getAllBike);

router.get('/:bikeId', BikeController.getSingleBike)

export const BikeRoutes = router;