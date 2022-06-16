import express from 'express';
import {
	addEachIngredient,
	getIngredientFields,
} from '../controllers/ingredients.controller.js';

const ingredientsRoute = express.Router();
ingredientsRoute.post('/ingredients', addEachIngredient);
ingredientsRoute.get('/ingredients/:ingredientsId', getIngredientFields);

export { ingredientsRoute };
