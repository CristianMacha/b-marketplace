import { getCustomRepository } from 'typeorm';
import { BadRequestException } from '../../middlewares/error-handler';
import { TypePersonWriteDto } from './type-person.dto';
import { TypePersonRepository } from './type-person.repository';

const registerTypePerson = async (model: TypePersonWriteDto) => {
    const typePersonRepository = getCustomRepository(TypePersonRepository);

    const tPersondb = await typePersonRepository.findOne({ where: [{ code: model.code }, { name: model.name }] });
    if (tPersondb) throw BadRequestException('El tipo de usuario ya esta registrado.');

    const newTypePerson = typePersonRepository.create(model);
    const createdTypePerson = await typePersonRepository.save(newTypePerson);

    return createdTypePerson;
};

export default { registerTypePerson };
