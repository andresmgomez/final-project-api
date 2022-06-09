import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const recipe = new Schema({
	name: String,
	description: String,
	foodItems: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'FoodItem',
		required: true,
	},
	ingredients: [
		{
			type: String,
		},
	],
	instructions: [
		{
			type: String,
		},
	],
});

const Recipe = model('Recipe', recipe);
export default Recipe;
