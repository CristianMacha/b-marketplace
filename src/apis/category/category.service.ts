import { getCustomRepository } from 'typeorm';

import { BadRequestException } from '../../middlewares/error-handler';
import { CategoryRepository } from './category.repository';
import { CategoryReadDto, CategoryWriteDto } from './category.dto';

const registerCategory = async (model: CategoryWriteDto) => {
    const categoryRepository = getCustomRepository(CategoryRepository);

    const categorydb = await categoryRepository.findOne({ where: { name: model.name } });
    if (categorydb) throw BadRequestException('La categoria ya esta registrada.');

    const newCategory = categoryRepository.create(model);
    const createdCategory = await categoryRepository.save(newCategory);

    return createdCategory;
};

const listCategories = async () => {
    const categoryRepository = getCustomRepository(CategoryRepository);

    const categories = await categoryRepository.find({
        where: { active: true },
        select: ['id', 'name', 'description'],
    });
    if (!categories) throw BadRequestException('No hay categorias.');

    return categories;
};

export default { registerCategory, listCategories };
