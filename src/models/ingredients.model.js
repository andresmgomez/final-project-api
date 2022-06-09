import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ingredients = new Schema({
	foodItem: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'FoodItem',
			required: true,
		},
	],
	isOnRecipe: {
		type: Boolean,
		default: true,
	},
});

const Ingredients = model('Ingredients', ingredients);
export default Ingredients;
