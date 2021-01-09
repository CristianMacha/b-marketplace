import { getCustomRepository } from 'typeorm';

import { BadRequestException } from '../../middlewares/error-handler';
import { Person } from '../person/person.entity';
import { PersonRepository } from '../person/person.respository';

import { AuthSignupDto, AuthSingninDto, ResponseAuthDto } from './auth.dto';
import { comparePassword, encryptPassword } from './utils/encrypt';
import { generateJWT } from './utils/jwt';

const signin = async (model: AuthSingninDto) => {
    const personRepository = getCustomRepository(PersonRepository);

    const personDb = await personRepository.findOne({ where: { email: model.email } });
    if (!personDb) throw BadRequestException('Credenciales incorrectos.');

    const match = await comparePassword(model.password, personDb.password);
    if (!match) throw BadRequestException('Credenciales incorrectos.');

    const jwt = await generateJWT(personDb.id);
    return jwt;
};

const signup = async (model: AuthSignupDto) => {
    const personRepository = getCustomRepository(PersonRepository);

    const persondb = await personRepository.findOne({ where: { email: model.email } });
    if (persondb) throw BadRequestException('El correo ya esta registrado.');

    const hashePassword = await encryptPassword(model.password);
    const newPerson = personRepository.create(model);
    newPerson.password = hashePassword;
    const createdPerson = await personRepository.save(newPerson);

    return createdPerson;
};

const getPersonLogged = async (person: Person) => {
    const personLogged = new ResponseAuthDto(person);
    return personLogged;
};

export default { signin, signup, getPersonLogged };
