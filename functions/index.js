import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';

// Import other modules from gateway and routes
import { connectToMongoAtlas } from './src/gateway/connect.js';
import { foodItems } from './src/routes/foodItems.route.js';
import { ingredientsRoute } from './src/routes/ingredients.route.js';
import { recipesRoute } from './src/routes/recipes.route.js';
import { rootRoute } from './src/routes/root.route.js';

// Start a connection to Mongo Atlas
connectToMongoAtlas();

// Make an instance of express server
const api = express();
// Allow to parse JSON inside express
api.use(express.json());
// Allow CORS before connecting frontend
api.use(
	cors({
		origin: [
			'https://final-project-web-7230e.web.app',
			'http://localhost:3030',
			'http://localhost:3000',
		],
	})
);

// Allow to upload images to a server
api.use(express.urlencoded({ extended: true }));

// RESTful Api Endpoints
api.use(rootRoute);
api.use(foodItems);
api.use(ingredientsRoute);
api.use(recipesRoute);

export const app = functions.https.onRequest(api);
