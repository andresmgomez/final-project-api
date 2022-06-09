import express from 'express';
import {
	addFoodItem,
	changeFoodItemFields,
	getFoodItems,
	removeFoodItem,
} from '../controllers/foodItems.controller.js';

const foodItems = express.Router();

foodItems.post('/foods/foodItem', addFoodItem);
foodItems.get('/foods', getFoodItems);
foodItems.put('/foods/food/:foodId', changeFoodItemFields);
foodItems.delete('/foods/food/:name', removeFoodItem);

export { foodItems };
