import { getCustomRepository } from 'typeorm';

import { PersonRepository } from './person.respository';
import { PersonWriteDto } from './person.dto';

const registerPerson = async (model: PersonWriteDto) => {
    const personRepository = getCustomRepository(PersonRepository);

    const newPerson = personRepository.create(model);
    const createdPerson = await personRepository.save(newPerson);

    return createdPerson;
};

export default { registerPerson };
