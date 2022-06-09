import mongoose, { Date } from 'mongoose';
const { Schema, model } = mongoose;

const foodItem = new Schema({
	name: String,
	category: String,
	serving: String,
	createdOn: {
		default: Date,
	},
});

const FoodItem = model('FoodItem', foodItem);
export default FoodItem;
