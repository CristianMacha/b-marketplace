import { Request, Response } from 'express';

import { Auth } from '../../middlewares/passport-jwt/auth.req';
import productService from './product.service';

const createProduct = async (req: Request, res: Response) => {
    const product = req.body;
    const person = <Auth>req.user;

    try {
        const response = await productService.registerProduct(product, person);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

const getMyProducts = async (req: Request, res: Response) => {
    const person = <Auth>req.user;

    try {
        const response = await productService.listMyProducts(person);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

export default { createProduct, getMyProducts };
