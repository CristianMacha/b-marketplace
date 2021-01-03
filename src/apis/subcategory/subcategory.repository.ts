import { EntityRepository, Repository } from 'typeorm';

import { Subcategory } from './subcategory.entity';

@EntityRepository(Subcategory)
export class SubcategoryRepository extends Repository<Subcategory> {}
