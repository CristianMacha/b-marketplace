import { Router } from 'express';

import roleController from './role.controller';

const routes = Router();

routes.post('/create', roleController.create);

export default routes;
