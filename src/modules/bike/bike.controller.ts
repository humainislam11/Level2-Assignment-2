import { Request, Response } from "express";
import { BikeServices } from "./bike.service";

const createBike = async (req: Request, res: Response) => {
  try {
    const {bike : bikeData} = req.body;
    const result = await BikeServices.createBikeIntoDB(bikeData);
    res.status(200).json({
      success: true,
      message: "Bike is Created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};


const getAllBike = async(req: Request,res:Response)=>{
    try{
      const result = await BikeServices.getAllBikesFromDB();

      res.status(200).json({
        success: true,
        message: "Bikes is get successfully",
        data: result,
      });

    }catch(err){
      console.log(err)
    }
};


const getSingleBike = async(req:Request,res:Response)=>{
  try{
     
    const { bikeId }= req.params

     const result = await BikeServices.getSingleBikeFromDB(bikeId);
     res.status(200).json({
      success: true,
      message : "Bike is get successfully",
      data: result,
     })
  }catch(err){
    console.log(err)
  }

}


export const BikeController ={
    createBike,
    getAllBike,
    getSingleBike
}