import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const recipe = new Schema({
	name: String,
	picture: {
		type: String,
		default: '',
	},
	description: String,
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
