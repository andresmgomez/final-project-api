import express from 'express';
import { addFoodItem } from '../controllers/foodItems.controller.js';

const foodItems = express.Router();
foodItems.post('/foods/foodItem', addFoodItem);

export { foodItems };
