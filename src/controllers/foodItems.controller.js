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

export const getFoodItems = async (req, res) => {
	const allFoodItems = await FoodItem.find();
	try {
		if (allFoodItems) {
			res.status(200).send({
				message: 'List of food items in the system:',
				foodItems: allFoodItems,
			});
		}
		return allFoodItems;
	} catch (err) {
		return res.status(500).send({
			message: 'Unable to fetch all the food items.',
			error: `${err.message}`,
		});
	}
};

export const changeFoodItemFields = async (req, res) => {
	const foodItem = await FoodItem.findByIdAndUpdate(
		req.params.foodId,
		{
			name: req.body.name,
			category: req.body.category,
			serving: req.body.serving,
		},
		{ new: true }
	);
	try {
		if (foodItem) {
			res.status(200).send({
				message: 'This food item has been updated',
				foodId: foodItem._id,
				foodItem: foodItem,
			});
		}
		return foodItem;
	} catch (err) {
		return res.status(500).send({
			message: 'Unable to update this food item',
			error: `${err.message}`,
		});
	}
};

export const removeFoodItem = async (req, res) => {
	const foodItem = await FoodItem.findOneAndDelete({
		name: req.params.name,
	});

	try {
		return res.status(200).send({
			message: 'This food item has been removed',
			foodItem,
		});
	} catch (err) {
		return res.status(500).send({
			message: 'Unable to delete this food item.',
			error: `${err.message}`,
		});
	}
};

export const displayFoodItemNames = async (req, res) => {
	const foodItemName = await FoodItem.find().select('name');

	try {
		return res.status(200).send(foodItemName);
	} catch (err) {
		return res.status(500).send({
			message: "Unable to display food item's name. Try again later.",
			error: `${err.message}`,
		});
	}
};

export const displayFoodItemServings = async (req, res) => {
	const foodItemName = await FoodItem.find().select('serving');

	try {
		return res.status(200).send(foodItemName);
	} catch (err) {
		return res.status(500).send({
			message: "Unable to display food item's serving. Try again later.",
			error: `${err.message}`,
		});
	}
};
