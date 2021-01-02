import { Router } from 'express';
import passport from 'passport';

import roleValidate from '../middlewares/role.middleware';

import roleRoutes from '../apis/role/role.routes';
import authRoutes from '../apis/auth/auth.routes';
import personRoutes from '../apis/person/person.routes';
import { ROLE } from '../config/environment';

const routes = Router();
routes.use('/role', roleRoutes);
routes.use('/auth', authRoutes);
routes.use('/person', [passport.authenticate('jwt', { session: false }), roleValidate([ROLE.admin, ROLE.owner])], personRoutes);

export default routes;
