import { getCustomRepository } from 'typeorm';

import { BadRequestException } from '../../middlewares/error-handler';
import { PersonStoreRepository } from './person-store.repository';
import { PersonRepository } from '../person/person.respository';
import { Auth } from '../../middlewares/passport-jwt/auth.req';
import { StoreRepository } from '../store/store.repository';
import { RoleRepository } from '../role/role.repository';
import { PersonStoreWriteDto } from './person-store.dto';
import { ROLE } from '../../config/environment';

const registerEmploye = async (email: string, auth: Auth) => {
    const personStoreRepository = getCustomRepository(PersonStoreRepository);
    const roleRepository = getCustomRepository(RoleRepository);
    const personRepository = getCustomRepository(PersonRepository);
    const storeRepository = getCustomRepository(StoreRepository);

    const roledb = await roleRepository.findOne({ where: { code: ROLE.employe, active: true } });
    if (!roledb) throw BadRequestException('Rol no encontrado.');

    const employe = await personRepository.findOne({ where: { email, active: true } });
    if (!employe) throw BadRequestException('Ususario no encontrado.');

    const store = storeRepository.create(auth.stores[0]);

    const newPersonStore = personStoreRepository.create();
    newPersonStore.role = roledb;
    newPersonStore.store = store;
    newPersonStore.person = employe;
    const createdPersonStore = await personStoreRepository.save(newPersonStore);

    return createdPersonStore;
};

export default { registerEmploye };
