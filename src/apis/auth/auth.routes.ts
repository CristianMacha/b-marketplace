import { Router } from 'express';
import passport from 'passport';

import authController from './auth.controller';

const routes = Router();

routes.post('/signin', authController.signin);
routes.post('/signup', authController.signup);
routes.get('/person', [passport.authenticate('jwt', { session: false })], authController.getPersonLogged);

export default routes;
