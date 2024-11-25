import { Schema, model,  } from 'mongoose';
import { Bike } from './bike.interface';

const bikeSchema = new Schema<Bike>({
    id: {type: String},
    name: {type: String , required: true},
    brand: {type: String , required: true},
    price: {type: Number, required: true},
    category: ["Mountain",  "Road" , "Hybrid" , "Electric"],
    description: {type: String, required: true},
    quantity: {type: Number, required: true},
    inStock: {type: Boolean, required: true}

})


export const BikeModel = model<Bike>('Bike', bikeSchema)