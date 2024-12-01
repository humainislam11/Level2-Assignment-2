import Joi from "joi";

const orderSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.empty': 'Email is required.',
      'string.email': 'Invalid email format.',
    }),
  
  product: Joi.string()
    .required()
    .messages({
      'string.empty': 'Product is required.',
    }),
  
  quantity: Joi.number()
    .integer()
    .min(1)
    .required()
    .messages({
      'number.base': 'Quantity must be a number.',
      'number.min': 'Quantity must be at least 1.',
      'any.required': 'Quantity is required.',
    }),
  
  totalPrice: Joi.number()
    .required()
    .messages({
      'number.base': 'Total price must be a number.',
      'any.required': 'Total price is required.',
    }),
});

export default orderSchema;
