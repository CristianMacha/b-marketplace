import { Request, Response } from 'express';
import subcategoryService from './subcategory.service';

const createSubcategory = async (req: Request, res: Response) => {
    const subcategory = req.body;

    try {
        const response = await subcategoryService.registerSubcategory(subcategory);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

const getSubcategories = async (req: Request, res: Response) => {
    try {
        const response = await subcategoryService.listSubcategories();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

export default { createSubcategory, getSubcategories };
