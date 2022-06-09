import express from 'express';
import { addEachIngredient } from '../controllers/ingredients.controller.js';

const ingredientsRoute = express.Router();
ingredientsRoute.post('/ingredients', addEachIngredient);

export { ingredientsRoute };
