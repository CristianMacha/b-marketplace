import { getCustomRepository } from 'typeorm';

import { BadRequestException } from '../../middlewares/error-handler';
import { Auth } from '../../middlewares/passport-jwt/auth.req';
import { StoreRepository } from '../store/store.repository';
import { ProductRepository } from './product.repository';
import { ProductWriteDto } from './product.dto';

const registerProduct = async (model: ProductWriteDto, person: Auth) => {
    const productRepository = getCustomRepository(ProductRepository);
    const storeRepository = getCustomRepository(StoreRepository);

    const storePersondb = await storeRepository.findOne(person.stores[0].id, { where: { active: true } });
    if (!storePersondb) throw BadRequestException('La tienda no esta activa.');

    const productdb = await productRepository.findOne({ where: { store: storePersondb, name: model.name } });
    if (productdb) throw BadRequestException('Ya registraste un producto con este nombre.');

    model.store = storePersondb;
    const newProduct = await productRepository.create(model);
    const createdProduct = await productRepository.save(newProduct);

    return createdProduct;
};

const listMyProducts = async (person: Auth) => {
    const productRepository = getCustomRepository(ProductRepository);

    const listProducts = await productRepository.find({ where: { store: person.stores[0], active: true } });
    if (!listProducts) throw BadRequestException('No se ha encontrado ningun producto.');

    return listProducts;
};

export default { registerProduct, listMyProducts };
