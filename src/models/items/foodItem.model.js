import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const foodItem = new Schema({
	name: String,
	category: String,
	serving: String,
	createdOn: {
		type: Date,
		default: new Date(),
	},
});

const FoodItem = model('FoodItem', foodItem);
export default FoodItem;
