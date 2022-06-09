import express from 'express';

// Temporary variables
const PORT = 8080;

// Make an instance of express server
const api = express();
// Allow to parse JSON inside express
api.use(express.json());

// Display test page
api.get('/', (req, res) => {
	res.send('Welcome to our API!');
});

// Run express server
api.listen(PORT, () => {
	console.log(`RESTful API Listening on http://localhost:${PORT}`);
});
