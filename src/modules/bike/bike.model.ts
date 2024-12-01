import mongoose, { Schema, model,  } from 'mongoose';
import { Bike } from './bike.interface';


const bikeSchema: Schema<Bike> = new mongoose.Schema({
    id: {type: String, required: true},
    name: {type: String , required: [true ,"Name is Required"],unique: true,immutable: true, maxlength:[30,"Name can not be more than 30 characters"]},
    brand: {type: String , required: [true ,"Brand is Required"]},
    price: {type: Number, required: [true ,"Price is Required"],min: 0},
    category: {
        type: String,
        enum: {
           values: ["Mountain",  "Road" , "Hybrid" , "Electric"],
           message: '{values} is not valid'
        },
        required: [true ,"Category is Required"]
    },
    description: {type: String, required: [true ,"Description is Required"]},
    quantity: {type: Number, required: [true ,"Quantity is Required"],min:0},
    inStock: {type: Boolean, required:[true ,"InStock is Required"],default: true}

});

bikeSchema.pre("save", function () {
    this.inStock = this.quantity > 0;
  });


export const BikeModel = model<Bike>('Bike', bikeSchema)