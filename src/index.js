import express from 'express';

// Bring environment variables
import { PORT, HOST } from './constants/variables.js';

// Make an instance of express server
const api = express();
// Allow to parse JSON inside express
api.use(express.json());

// Display test page
api.get('/', (req, res) => {
	res.send('Welcome to our API!');
});

// Run express server
api.listen(PORT, HOST, () => {
	console.log(`RESTful API Listening on http://${HOST}:${PORT}`);
});
