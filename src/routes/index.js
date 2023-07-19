const express = require('express');
const router = express.Router();

import { home, login } from '../controllers/homeController';

router.get('/', home);

router.get('/login', login);

export default router;
