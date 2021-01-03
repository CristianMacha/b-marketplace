import { Router } from 'express';
import passport from 'passport';

import subcategoryController from './subcategory.controller';
import permitRole from '../../middlewares/role.middleware';
import { ROLE } from '../../config/environment';

const routes = Router();

routes.post(
    '/create',
    [passport.authenticate('jwt', { session: false }), permitRole([ROLE.admin])],
    subcategoryController.createSubcategory
);

routes.get('/list', subcategoryController.getSubcategories);

export default routes;
