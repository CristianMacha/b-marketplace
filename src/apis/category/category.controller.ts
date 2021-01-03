import { Request, Response } from 'express';

import categoryService from './category.service';

const createCategory = async (req: Request, res: Response) => {
    const category = req.body;

    try {
        const response = await categoryService.registerCategory(category);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

const getCategories = async (req: Request, res: Response) => {
    try {
        const response = await categoryService.listCategories();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

export default { createCategory, getCategories };
