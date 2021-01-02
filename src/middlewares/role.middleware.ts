import { NextFunction, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import { PersonRepository } from '../apis/person/person.respository';

import { Auth } from './passport-jwt/auth.req';

export default function permit(roles: string[]) {
    const personRepository = getCustomRepository(PersonRepository);
    const rolesPermit = roles;

    return async (req: Request, res: Response, next: NextFunction) => {
        const { id } = <Auth>req.user;

        try {
            const personDb = await personRepository.findOne({ where: { id }, relations: ['role'] });
            if (!personDb) return res.status(404).json({ message: 'El usuario no existe.' });

            if (rolesPermit.indexOf(personDb.role.code) > -1) {
                next();
            } else {
                return res.status(400).json({ message: 'Rol no permitido.' });
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}
