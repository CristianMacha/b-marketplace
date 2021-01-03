import { PersonStore } from '../../apis/person-store/person-store.entity';
import { Role } from '../../apis/role/role.entity';

export class Auth {
    id: number;
    names: string;
    surnames: string;
    email: string;
    role: Role;
    stores: PersonStore[];
}
