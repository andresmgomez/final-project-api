import express from 'express';
import {
	addNewRecipe,
	getRecentRecipes,
	getRecipeById,
	updateRecipeField,
} from '../controllers/recipes.controller.js';

const recipesRoute = express.Router();
recipesRoute.post('/recipes/recipe', addNewRecipe);
recipesRoute.get('/recipes', getRecentRecipes);
recipesRoute.get('/recipes/recipe/:recipeId', getRecipeById);
recipesRoute.put('/recipes/recipe/:name', updateRecipeField);

export { recipesRoute };
