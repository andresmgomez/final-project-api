import express from 'express';
import {
	addNewRecipe,
	getRecipeByName,
	updateRecipeField,
} from '../controllers/recipes.controller.js';

const recipesRoute = express.Router();
recipesRoute.post('/recipes/recipe', addNewRecipe);
recipesRoute.get('/recipes/recipe/:name', getRecipeByName);
recipesRoute.put('/recipes/recipe/:name', updateRecipeField);

export { recipesRoute };
