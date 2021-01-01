import { Router } from 'express';

import storeController from './store.controller';

const routes = Router();
routes.post('/create', storeController.registerStorePerson);

export default routes;
