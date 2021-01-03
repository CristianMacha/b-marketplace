import { getCustomRepository } from 'typeorm';

import { BadRequestException } from '../../middlewares/error-handler';
import { SubcategoryRepository } from './subcategory.repository';
import { SubCategoryWriteDto } from './subcategory.dto';

const registerSubcategory = async (model: SubCategoryWriteDto) => {
    const subcategoryRepository = getCustomRepository(SubcategoryRepository);

    const subcategorydb = await subcategoryRepository.findOne({ where: { name: model.name } });
    if (subcategorydb) throw BadRequestException('La subcategoria ya existe.');

    const newSubcategory = subcategoryRepository.create(model);
    const createdSubcategory = await subcategoryRepository.save(newSubcategory);

    return createdSubcategory;
};

const listSubcategories = async () => {
    const subcategoryRepository = getCustomRepository(SubcategoryRepository);

    const subcategories = await subcategoryRepository.find({
        where: { active: true },
        select: ['id', 'name', 'description'],
    });
    return subcategories;
};

export default { registerSubcategory, listSubcategories };
