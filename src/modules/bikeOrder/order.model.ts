import mongoose, {  Schema, model } from "mongoose";
import { Order } from "./order.interface";



const OrderSchema: Schema<Order> = new mongoose.Schema(
  {
    email: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true },
  }
);

export const OrderModel = model<Order>("Order", OrderSchema);
