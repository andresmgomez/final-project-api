import express from 'express';

// Bring environment variables
import { PORT, HOST } from './constants/variables.js';

// Import other modules from gateway and routes
import { connectToMongoAtlas } from './gateway/connect.js';
import { foodItems } from './routes/foodItems.route.js';

// Make an instance of express server
const api = express();
// Allow to parse JSON inside express
api.use(express.json());
// Allow to upload images to a server
api.use(express.urlencoded({ extended: true }));

// Display test page
api.get('/', (req, res) => {
	res.send('Welcome to our API!');
});

// Start a connection to Mongo Atlas
await connectToMongoAtlas();
api.use(foodItems);

// Run express server
api.listen(PORT, HOST, () => {
	console.log(`RESTful API Listening on http://${HOST}:${PORT}`);
});
