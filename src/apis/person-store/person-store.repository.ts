import { EntityRepository, Repository } from 'typeorm';

import { PersonStore } from './person-store.entity';

@EntityRepository(PersonStore)
export class PersonStoreRepository extends Repository<PersonStore> {}
