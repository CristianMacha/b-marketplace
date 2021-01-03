import { Router } from 'express';
import passport from 'passport';

import roleRoutes from '../apis/role/role.routes';
import authRoutes from '../apis/auth/auth.routes';
import personRoutes from '../apis/person/person.routes';
import storeRoutes from '../apis/store/store.routes';
import categoryRoutes from '../apis/category/category.routes';
import subcategoryRoutes from '../apis/subcategory/subcategory.routes';
import productRoutes from '../apis/product/product.routes';

const routes = Router();
routes.use('/role', roleRoutes);
routes.use('/auth', authRoutes);
routes.use('/person', personRoutes);
routes.use('/store', [passport.authenticate('jwt', { session: false })], storeRoutes);
routes.use('/category', categoryRoutes);
routes.use('/subcategory', subcategoryRoutes);
routes.use('/product', productRoutes);

export default routes;
