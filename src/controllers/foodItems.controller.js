import FoodItem from '../models/items/foodItem.model.js';

export const addFoodItem = async (req, res) => {
	// Initial Properties of a food item
	const foodItem = new FoodItem({
		name: req.body.name,
		category: req.body.category,
		serving: req.body.serving,
		createdOn: req.body.createdOn,
	});

	try {
		// Create a new food item in the database
		const newFoodItem = await foodItem.save();
		if (newFoodItem) {
			res.status(201).send({
				message: 'Food Item has been added successfully',
				foodItem: console.log(newFoodItem),
			});
		}
		return newFoodItem;
	} catch (err) {
		return res.status(500).send({
			message: 'Unable to add Food Item. Check for required information.',
			error: `${err.message}`,
		});
	}
};
