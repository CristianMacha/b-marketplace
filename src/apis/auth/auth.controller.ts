import { Request, Response } from 'express';

import authServices from './auth.service';

const singninPerson = async (req: Request, res: Response) => {
    const person = req.body;
    try {
        const response = await authServices.singninPerson(person);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

export default { singninPerson };
