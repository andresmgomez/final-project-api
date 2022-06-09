import FoodItem from '../models/items/foodItem.model.js';
import Ingredients from '../models/ingredients.model.js';

export const addEachIngredient = async (req, res) => {
	const foodItem = await FoodItem.findById(req.body.foodItem);

	let ingredients = new Ingredients({
		foodItem: req.body.foodItem,
	});

	try {
		ingredients = await ingredients.save();

		if (foodItem) {
			return res.status(201).send({
				message: 'New ingredient has been added',
				ingredient: ingredients,
			});
		}
		return ingredient;
	} catch (err) {
		return res.status(500).send({
			message: 'Unable to add new ingredient.',
			error: `${err.message}`,
		});
	}
};
