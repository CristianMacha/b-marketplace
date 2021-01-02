import { Request, Response } from 'express';

import personServices from './person.service';

const createPerson = async (req: Request, res: Response) => {
    const person = req.body;

    try {
        const response = await personServices.registerPerson(person);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

export default { createPerson };
