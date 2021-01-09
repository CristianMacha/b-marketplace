import { Router } from 'express';

import personStoreController from './person-store.controller';
import permitRole from '../../middlewares/role.middleware';
import { ROLE } from '../../config/environment';

const routes = Router();

routes.post('/create', [permitRole([ROLE.owner])], personStoreController.createEmploye);

export default routes;
