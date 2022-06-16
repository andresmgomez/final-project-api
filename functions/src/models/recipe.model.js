import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const recipe = new Schema({
	name: {
		type: String,
		required: [true, "Recipe's name field is required"],
	},
	picture: {
		type: String,
		default: 'https://via.placeholder.com/870x494',
	},
	description: {
		type: String,
		required: [true, "Recipe's quick description field is required"],
	},
	ingredients: {
		type: Object,
		required: [true, "Recipe's ingredient fields are required"],
	},
	instructions: {
		type: Object,
		required: [true, "Recipe's instruction fields are required"],
	},
});

const Recipe = model('Recipe', recipe);
export default Recipe;
