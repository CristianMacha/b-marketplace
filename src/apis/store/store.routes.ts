import { Router } from 'express';

import storeController from './store.controller';
import permitRole from '../../middlewares/role.middleware';
import { ROLE } from '../../config/environment';

const routes = Router();

routes.post('/create', storeController.createStore);

export default routes;
