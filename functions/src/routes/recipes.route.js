import express from 'express';
import {
	addNewRecipe,
	getRecentRecipes,
	getRecipeById,
	updateRecipeField,
} from '../controllers/recipes.controller.js';

const recipesRoute = express.Router();
recipesRoute.post('/recipes', addNewRecipe);
recipesRoute.get('/recipes', getRecentRecipes);
recipesRoute.get('/recipes/:recipeId', getRecipeById);
recipesRoute.put('/recipes/:name', updateRecipeField);

export { recipesRoute };
