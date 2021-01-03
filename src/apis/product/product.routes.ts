import { Router } from 'express';
import passport from 'passport';

import permitRole from '../../middlewares/role.middleware';
import productController from './product.controller';
import { ROLE } from '../../config/environment';

const routes = Router();

routes.post(
    '/create',
    [passport.authenticate('jwt', { session: false }), permitRole([ROLE.employe, ROLE.owner])],
    productController.createProduct
);
routes.get(
    '/myproducts',
    [passport.authenticate('jwt', { session: false }), permitRole([ROLE.employe, ROLE.owner])],
    productController.getMyProducts
);

export default routes;
