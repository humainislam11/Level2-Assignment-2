import { Bike } from "./bike.interface";
import { BikeModel } from "./bike.model";

const createBikeIntoDB = async (bike: Bike)=>{
  const result = await BikeModel.create(bike);
  return result
};


const getAllBikesFromDB = async ()=>{
  const result = await BikeModel.find();
  return result
};


const getSingleBikeFromDB = async (_id: string)=>{
 
  const result = await BikeModel.findOne({_id});
  return result
};


const updateBike = async (id:string,bike: Bike)=>{
  const result = await BikeModel.findByIdAndUpdate(id,bike,{
    new: true
  });
  return result
};


const deleteBike = async (id:string)=>{
  const result = await BikeModel.findByIdAndDelete(id);
  return result
};

export const BikeServices = {
    createBikeIntoDB,
    getAllBikesFromDB,
    getSingleBikeFromDB,
    updateBike,
    deleteBike
}