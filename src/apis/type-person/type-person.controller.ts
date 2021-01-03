import { Request, Response } from 'express';
import typePersonService from './type-person.service';

const createTypePerson = async (req: Request, res: Response) => {
    const typePerson = req.body;

    try {
        const response = await typePersonService.registerTypePerson(typePerson);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

export default { createTypePerson };
