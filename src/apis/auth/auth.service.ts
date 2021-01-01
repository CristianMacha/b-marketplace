import { getCustomRepository } from 'typeorm';
import { BadRequestException } from '../../middlewares/passport/error-handler';

import { PersonRepository } from '../person/person.respository';

import { AuthSingninDto } from './auth.dto';
import { comparePassword } from './utils/encrypt';
import { generateJWT } from './utils/jwt';

const singninPerson = async (model: AuthSingninDto) => {
    const personRepository = getCustomRepository(PersonRepository);

    const personDb = await personRepository.findOne({ where: { email: model.email } });
    if (!personDb) throw BadRequestException('Credenciales incorrectos.');

    const match = await comparePassword(model.password, personDb.password);
    if (!match) throw BadRequestException('Credenciales incorrectos.');

    const jwt = await generateJWT(personDb.id);
    return jwt;
};

export default { singninPerson };
