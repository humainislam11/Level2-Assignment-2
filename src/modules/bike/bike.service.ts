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


const getSingleBikeFromDB = async (id: string)=>{
  const result = await BikeModel.findOne({id});
  return result
}

export const BikeServices = {
    createBikeIntoDB,
    getAllBikesFromDB,
    getSingleBikeFromDB
}