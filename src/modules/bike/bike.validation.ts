import Joi from "joi";

const bikeValidationSchema = Joi.object({
    id: Joi.string().required().messages({
      'any.required': 'ID is required',
    }),
    name: Joi.string()
      .required()
      .max(30)
      .messages({
        'string.base': 'Name must be a string',
        'string.empty': 'Name is required',
        'string.max': 'Name cannot be more than 30 characters',
        'any.required': 'Name is required',
      }),
    brand: Joi.string().required().messages({
      'string.base': 'Brand must be a string',
      'string.empty': 'Brand is required',
      'any.required': 'Brand is required',
    }),
    price: Joi.number().required().messages({
      'number.base': 'Price must be a number',
      'any.required': 'Price is required',
    }),
    category: Joi.string()
      .valid('Mountain', 'Road', 'Hybrid', 'Electric')
      .required()
      .messages({
        'any.only': '{#value} is not valid',
        'any.required': 'Category is required',
      }),
    description: Joi.string().required().messages({
      'string.base': 'Description must be a string',
      'string.empty': 'Description is required',
      'any.required': 'Description is required',
    }),
    quantity: Joi.number().required().messages({
      'number.base': 'Quantity must be a number',
      'any.required': 'Quantity is required',
    }),
    inStock: Joi.boolean().required().messages({
      'boolean.base': 'InStock must be a boolean',
      'any.required': 'InStock is required',
    }),
  });

  export default bikeValidationSchema;