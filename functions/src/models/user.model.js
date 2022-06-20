import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const user = new Schema({
	name: {
		type: String,
	},
	username: {
		type: String,
		required: [true, 'Username field is required'],
	},
	email: {
		type: String,
		required: [true, 'Email address field is required'],
	},
	password: {
		type: String,
		required: [true, 'Password field is required'],
	},
});

const User = model('User', user);
export default User;
