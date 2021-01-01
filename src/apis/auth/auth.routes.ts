import { Router } from 'express';

import authController from './auth.controller';

const routes = Router();

routes.post('/singnin/person', authController.singninPerson);

export default routes;
