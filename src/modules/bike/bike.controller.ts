import { Request, Response } from "express";
import { BikeServices } from "./bike.service";
import bikeValidationSchema from "./bike.validation";

const createBike = async (req: Request, res: Response) => {
  try {
    
  
    
    const {bike : bikeData} = req.body;

    const {error,value} = bikeValidationSchema.validate(bikeData);
   
    
    
    const result = await BikeServices.createBikeIntoDB(value);
    res.status(200).json({
      success: true,
      message: "Bike is Created successfully",
      data: result,
    });
    if(error){
      res.status(500).json({
        success: false,
        message: "something went wrong",
        error,
      });
    }

    
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: err,
    });
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
      res.status(500).json({
        success: false,
        message: "Bikes is not get",
        error: err,
      });

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
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: err,
    });
  }

};



const updateBike = async(req:Request,res:Response)=>{
  try{
     
    const { bikeId }= req.params
    const body = req.body

     const result = await BikeServices.updateBike(bikeId,body);
     res.status(200).json({
      success: true,
      message : "Bike updated  successfully",
      data: result,
     })
  }catch(err){
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: err,
    });
  }

};





const deleteBike = async(req:Request,res:Response)=>{
  try{
     
    const { bikeId }= req.params

     const result = await BikeServices.deleteBike(bikeId);
     res.status(200).json({
      success: true,
      message : "Bike is delete successfully",
      data: result,
     })
  }catch(err){
    res.status(500).json({
      success: false,
      message : "Bike is not a delete",
      error: err,
     })
  }

}

export const BikeController ={
    createBike,
    getAllBike,
    getSingleBike,
    updateBike,
    deleteBike
}