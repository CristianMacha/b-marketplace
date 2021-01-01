import { Request, Response } from 'express';

import roleServices from './role.service';

const create = async (req: Request, res: Response) => {
    const role = req.body;

    try {
        const response = await roleServices.createRole(role);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

export default { create };
