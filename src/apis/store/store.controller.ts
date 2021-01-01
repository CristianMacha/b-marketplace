import { Request, Response } from 'express';

import storeServices from './store.service';

const registerStorePerson = async (req: Request, res: Response) => {
    const { store, person } = req.body;
    try {
        const response = await storeServices.registerStore(store, person);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

export default { registerStorePerson };
