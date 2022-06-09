import express from 'express';
import {
	addEachIngredient,
	getFoodItems,
} from '../controllers/ingredients.controller.js';

const ingredientsRoute = express.Router();
ingredientsRoute.post('/ingredients', addEachIngredient);
ingredientsRoute.get('/ingredients/:ingredientsId', getFoodItems);

export { ingredientsRoute };
