import { Router } from 'express';

import roleRoutes from '../apis/role/role.routes';
import storeRoutes from '../apis/store/store.routes';

const routes = Router();
routes.use('/role', roleRoutes);
routes.use('/store', storeRoutes);

export default routes;
