import { Role } from '../../apis/role/role.entity';
import { Store } from '../../apis/store/store.entity';

export class Auth {
    id: number;
    names: string;
    surnames: string;
    email: string;
    role: Role;
    stores: Store[];
}
