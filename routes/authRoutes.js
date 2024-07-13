import { loginFunction, signupFunction } from '../functions/authFunctions.js';

import express from 'express'

const authRoutes = express.Router();

authRoutes.post('/login', loginFunction);
authRoutes.post('/signup', signupFunction);

export default authRoutes;
