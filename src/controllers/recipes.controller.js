import Recipe from '../models/recipe.model.js';

export const addNewRecipe = async (req, res) => {
	const recipe = new Recipe({
		name: req.body.name,
		picture: req.body.picture,
		description: req.body.description,
		ingredients: req.body.ingredients,
		instructions: req.body.instructions,
	});

	try {
		const savedRecipe = await recipe.save();
		return res.status(201).send({
			message: 'A new recipe has been added it',
			recipe: savedRecipe,
		});
	} catch (err) {
		return res.status(500).send({
			message: 'Unable to create a new recipe',
			error: `${err.message}`,
		});
	}
};

export const getRecipeById = async (req, res) => {
	const recipe = await Recipe.findById(req.params.recipeId);

	try {
		return res.status(200).send(recipe);
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
		return res.status(200).send({
			message: 'This recipe field has been update it',
			recipe: recipe,
		});
	} catch (err) {
		res.status(500).send({
			message: "Unable to update the recipe's fields",
			error: `${err.message}`,
		});
	}
};
