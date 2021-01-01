import { getCustomRepository } from 'typeorm';

import { PersonRepository } from './person.respository';
import { PersonWriteDto } from './person.dto';

const registerPerson = async (model: PersonWriteDto) => {
    const personRepository = getCustomRepository(PersonRepository);
};
