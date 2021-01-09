import { PersonStore } from '../../apis/person-store/person-store.entity';

export class Auth {
    id: number;
    names: string;
    surnames: string;
    email: string;
    photo: string;
    sexo: boolean;
    stores: PersonStore[];
}
