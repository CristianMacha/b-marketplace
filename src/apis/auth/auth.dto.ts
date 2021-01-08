import { Person } from '../person/person.entity';
import { Role } from '../role/role.entity';

export class AuthSingninDto {
    email: string;
    password: string;
}

export class AuthSignupDto {
    names: string;
    surnames: string;
    email: string;
    password: string;
    role: Role;
}

export class ResponseAuthDto {
    names: string;
    surnames: string;
    email: string;
    photo: string;
    sexo: boolean;
    constructor(source: Person) {
        this.names = source.names;
        this.surnames = source.surnames;
        this.email = source.email;
        this.photo = source.photo;
        this.sexo = source.sexo;
    }
}
