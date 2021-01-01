import { Router } from 'express';

import roleRoutes from '../apis/role/role.routes';
import storeRoutes from '../apis/store/store.routes';
import authRoutes from '../apis/auth/auth.routes';

const routes = Router();
routes.use('/role', roleRoutes);
routes.use('/store', storeRoutes);
routes.use('/auth', authRoutes);

export default routes;
