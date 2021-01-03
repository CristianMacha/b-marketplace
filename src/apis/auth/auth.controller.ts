import { Request, Response } from 'express';

import authServices from './auth.service';

const signin = async (req: Request, res: Response) => {
    const person = req.body;

    try {
        const response = await authServices.signin(person);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

const signup = async (req: Request, res: Response) => {
    const person = req.body;

    try {
        const response = await authServices.signup(person);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

export default { signin, signup };
