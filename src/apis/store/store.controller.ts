import { Request, Response } from 'express';
import { Auth } from '../../middlewares/passport-jwt/auth.req';

import storeServices from './store.service';

const createStore = async (req: Request, res: Response) => {
    const store = req.body;
    const person = <Auth>req.user;

    try {
        const response = await storeServices.createStore(store, person);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

export default { createStore };
