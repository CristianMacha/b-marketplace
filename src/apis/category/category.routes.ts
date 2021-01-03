import { Router } from 'express';
import passport from 'passport';

import permitRole from '../../middlewares/role.middleware';
import categoryController from './category.controller';
import { ROLE } from '../../config/environment';

const routes = Router();

routes.post(
    '/create',
    [passport.authenticate('jwt', { session: false }), permitRole([ROLE.admin])],
    categoryController.createCategory
);
routes.get('/list', categoryController.getCategories);

export default routes;
