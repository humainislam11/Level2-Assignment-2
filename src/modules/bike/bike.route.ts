import express from "express"
import { BikeController } from "./bike.controller"

const router = express.Router()

router.post('/create-bike', BikeController.createBike);

router.get('/',BikeController.getAllBike);

router.get('/:bikeId', BikeController.getSingleBike)
router.put('/:bikeId', BikeController.updateBike)
router.delete('/:bikeId', BikeController.deleteBike)

export const BikeRoutes = router;