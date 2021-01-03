import { Router } from 'express';
import { ROLE } from '../../config/environment';

import personController from './person.controller';

const routes = Router();

routes.post('/create', personController.createPerson);

export default routes;
