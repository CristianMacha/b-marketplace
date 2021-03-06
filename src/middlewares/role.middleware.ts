import { NextFunction, Request, Response } from 'express';

import { Auth } from './passport-jwt/auth.req';

export default function permit(roles: string[]) {
    const rolesPermit = roles;

    return async (req: Request, res: Response, next: NextFunction) => {
        const { stores } = <Auth>req.user;

        if (stores.length == 0) return res.status(401).json({ message: 'No tienes acceso.' });
        const role = stores[0].role;

        try {
            const permit = rolesPermit.some((code) => code === role.code);

            if (permit) {
                next();
            } else {
                return res.status(400).json({ message: 'Rol no permitido.' });
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}
