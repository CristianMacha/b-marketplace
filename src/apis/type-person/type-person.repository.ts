import { EntityRepository, Repository } from 'typeorm';
import { TypePerson } from './type-person.entity';

@EntityRepository(TypePerson)
export class TypePersonRepository extends Repository<TypePerson> {}
