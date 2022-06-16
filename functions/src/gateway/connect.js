import mongoose from 'mongoose';
import { MONGO_ATLAS } from '../constants/variables.js';

export const connectToMongoAtlas = () => {
	try {
		console.log('Successfully Connected to Mongo Atlas Database');
		return mongoose.connect(
			MONGO_ATLAS,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
			},
			{
				dbName: 'project',
			}
		);
	} catch (err) {
		// mongoose.connection.close()
		console.log({
			message: 'Unable to connect to Mongo Atlas Database',
			error: `See error message: ${err.message}`,
		});
	}
};
