import User from '../models/user.model.js';

export const createUser = async (req, res) => {
	const user = new User({
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	});

	try {
		const addUser = await user.save();
		return res.status(201).send(addUser);
	} catch (err) {
		return res.status(500).send({
			message: 'Unable to create a new user',
			error: err.message,
		});
	}
};

export const getAllUsers = async (req, res) => {
	const allUsers = await Recipe.find();
	try {
		return res.status(200).send(allUsers);
	} catch (err) {
		return res.status(500).send({
			message: 'Unable to fetch a list of users.',
			error: err.message,
		});
	}
};

export const getUserById = async (req, res) => {
	const user = await User.findById(req.params.userId);

	try {
		return res.status(200).send(user);
	} catch (err) {
		return res.status(500).send({
			message: 'Unable to find this specific user.',
			error: err.message,
		});
	}
};
