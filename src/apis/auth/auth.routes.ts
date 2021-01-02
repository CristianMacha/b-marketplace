import { Router } from 'express';

import authController from './auth.controller';

const routes = Router();

routes.post('/signin', authController.signin);
routes.post('/signup', authController.signup);

export default routes;
