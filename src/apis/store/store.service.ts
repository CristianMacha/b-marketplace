import { getConnection, getCustomRepository } from 'typeorm';

import { PersonStoreRepository } from '../person-store/person-store.repository';
import { BadRequestException } from '../../middlewares/error-handler';
import { PersonStore } from '../person-store/person-store.entity';
import { PersonRepository } from '../person/person.respository';
import { Auth } from '../../middlewares/passport-jwt/auth.req';
import { StoreRepository } from './store.repository';
import { StoreWriteDto } from './store.dto';
import { Store } from './store.entity';

const createStore = async (model: StoreWriteDto, person: Auth) => {
    const storeRepository = getCustomRepository(StoreRepository);
    const personStoreRepository = getCustomRepository(PersonStoreRepository);
    const personRepository = getCustomRepository(PersonRepository);

    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
        const storedb = await storeRepository.findOne({ where: [{ ruc: model.ruc }, { name: model.name }] });
        if (storedb) throw BadRequestException('La tienda ya esta registrada.');

        const newStore = storeRepository.create(model);
        const createdStore = await queryRunner.manager.save(Store, newStore);
        

        const personAuth = personRepository.create(person);
        const newPersonStore = personStoreRepository.create();
        newPersonStore.person = personAuth;
        newPersonStore.store = createdStore;
        const createdPersonStore = await queryRunner.manager.save(PersonStore, newPersonStore);

        await queryRunner.commitTransaction();

        return createdPersonStore;
    } catch (error) {
        await queryRunner.rollbackTransaction();
        throw error;
    } finally {
        await queryRunner.release();
    }
};

export default { createStore };
