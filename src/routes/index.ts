import { Router } from 'express';

import roleRoutes from '../apis/role/role.routes';
import authRoutes from '../apis/auth/auth.routes';

const routes = Router();
routes.use('/role', roleRoutes);
routes.use('/auth', authRoutes);

export default routes;
