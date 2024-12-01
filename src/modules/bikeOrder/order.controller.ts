import {  Request, Response } from "express";
import { OrderModel } from "./order.model";
import { OrderService } from "./order.service";
import { BikeModel } from "../bike/bike.model";


 const createOrder = async (req: Request, res: Response) => {
  try {

    const {product,quantity,email} = req.body;
    const bike = await BikeModel.findById(product);
   
    if (!bike || bike.quantity < quantity) {
      return res.status(400).json({ message: "Insufficient stock", success: false });
    }
    const totalPrice = bike.price * quantity;
    const order = { email, product, quantity, totalPrice };
    console.log(order)


    const orderConfirm = await OrderService.createOrder(order)

    res.status(201).json({
      message: "Order created successfully",
      success: true,
      data: orderConfirm,
    });

    bike.quantity -= quantity;
    if (bike.quantity === 0) bike.inStock = false;
    console.log(bike)

    await bike.save();
   
  } catch (error) {
    res.status(500).json({
        success: false,
        message: "something went wrong",
        error: error,
      });
  }
};

 const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const revenue = await OrderModel.aggregate([{ $group: { _id: null, totalRevenue: { $sum: "$totalPrice" } } }]);
    res.status(200).json({
      message: "Revenue calculated successfully",
      success: true,
      data: { totalRevenue: revenue[0]?.totalRevenue || 0 },
    });
  } catch (error) {
    res.status(500).json({
        success: false,
        message: "something went wrong",
        error: error,
      });
  }
};

 export const OrderController = {
      createOrder,
      calculateRevenue
 }
