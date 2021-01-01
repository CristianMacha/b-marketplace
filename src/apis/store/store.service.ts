import { getConnection, getCustomRepository } from 'typeorm';

import { BadRequestException } from '../../middlewares/passport/error-handler';
import { PersonRepository } from '../person/person.respository';
import { RoleRepository } from '../role/role.repository';
import { StoreRepository } from './store.repository';
import { ROLE } from '../../config/environment';

import { PersonWriteDto } from '../person/person.dto';
import { Person } from '../person/person.entity';
import { generateJWT } from '../auth/utils/jwt';
import { StoreWriteDto } from './store.dto';
import { Store } from './store.entity';
import { encryptPassword } from '../auth/utils/encrypt';

const registerStore = async (store: StoreWriteDto, person: PersonWriteDto) => {
    const storeRepository = getCustomRepository(StoreRepository);
    const personRepository = getCustomRepository(PersonRepository);
    const roleRepository = getCustomRepository(RoleRepository);

    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
        const storeDb = await storeRepository.findOne({ where: { ruc: store.ruc } });
        if (storeDb) throw BadRequestException('La tienda ya esta registrada.');

        const roleDb = await roleRepository.findOne({ where: { code: ROLE.employe } });
        if (!roleDb) throw BadRequestException('Ocurrio un problema al asignar rol de usuario.');
        
        const personDb = await personRepository.findOne({where: { dni: person.dni }});
        if (personDb) throw BadRequestException('El usuario ya existe');

        const hashed = await encryptPassword(person.password); 
        person.password = hashed;

        const newStore = storeRepository.create(store);
        const createdStore = await queryRunner.manager.save(Store, newStore);

        const newPerson = personRepository.create(person);
        newPerson.store = createdStore;
        newPerson.role = roleDb;
        const createdPerson = await queryRunner.manager.save(Person, newPerson);

        const jwt = await generateJWT(createdPerson.id);

        await queryRunner.commitTransaction();

        return jwt;
    } catch (error) {
        await queryRunner.rollbackTransaction();
        throw error;
    } finally {
        await queryRunner.release();
    }
};

export default { registerStore };
