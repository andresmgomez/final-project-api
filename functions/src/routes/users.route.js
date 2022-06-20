import express from 'express';
import { createUser, getUserById } from '../controllers/user.controller.js';

const usersRoute = express.Router();
usersRoute.post('/users', createUser);
usersRoute.get('/users/:userId', getUserById);

export { usersRoute };
