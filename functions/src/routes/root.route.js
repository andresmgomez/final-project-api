import express from 'express';

const rootRoute = express.Router();

// Redirect to a valid endpoint
rootRoute.get('/', (req, res) => {
	res.redirect('/recipes');
});

export { rootRoute };
