// import { getCollection } from '../gateway/connect.js';
import Recipe from '../models/recipe.model.js';

export const addNewRecipe = async (req, res) => {
	try {
		const recipe = new Recipe({
			name: req.body.name,
			picture: req.body.picture,
			description: req.body.description,
			ingredients: req.body.ingredients,
			instructions: req.body.instructions,
		});
		const savedRecipe = await recipe.save();

		return res.status(201).send(savedRecipe);
	} catch (err) {
		return res.status(500).send({
			message: 'Unable to access ingredients from the system',
			error: `${err.message}`,
		});
	}
};

export const getRecipeByName = async (req, res) => {
	const recipe = await Recipe.findOne({
		name: req.body.name,
	});

	try {
		if (recipe) {
			res.status(200).send({
				message: 'This recipe matches your condition',
				recipe,
			});
		}
		return recipe;
	} catch (err) {
		return res.status(500).send({
			message: 'Unable to find recipe that matches this condition',
			error: `${err.message}`,
		});
	}
};

export const updateRecipeField = async (req, res) => {
	const recipe = await Recipe.findOneAndUpdate(
		{
			name: req.body.name,
		},
		{
			$set: {
				ingredients: req.body.ingredients,
				instructions: req.body.instructions,
			},
		}
	);

	try {
		if (recipe) {
			res.status(200).send({
				message: "This recipe's fields has been update it",
				recipe,
			});
		}
	} catch (err) {
		res.status(500).send({
			message: "Unable to update the recipe's fields",
			error: `${err.message}`,
		});
	}
};
