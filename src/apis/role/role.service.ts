import { getCustomRepository } from 'typeorm';

import { BadRequestException } from '../../middlewares/error-handler';
import { RoleRepository } from './role.repository';

import { RolWriteDto } from './role.dto';

const createRole = async (model: RolWriteDto) => {
    const roleRepository = getCustomRepository(RoleRepository);

    const roleDb = await roleRepository.findOne({ where: { code: model.code } });
    if (roleDb) throw BadRequestException('El rol ya existe.');

    const newRole = roleRepository.create(model);
    const createdRole = await roleRepository.save(newRole);

    return createdRole;
};

export default { createRole };
