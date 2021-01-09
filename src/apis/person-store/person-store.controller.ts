import { Request, Response } from 'express';
import { Auth } from '../../middlewares/passport-jwt/auth.req';
import personStoreService from './person-store.service';

const createEmploye = async (req: Request, res: Response) => {
    const { email } = req.body;
    const personAuth = <Auth>req.user;

    try {
        const response = await personStoreService.registerEmploye(email, personAuth);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

export default { createEmploye };
