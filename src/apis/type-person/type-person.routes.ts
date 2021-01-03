import { Router } from 'express';
import typePersonController from './type-person.controller';

const routes = Router();

routes.post('/create', typePersonController.createTypePerson);

export default routes;
