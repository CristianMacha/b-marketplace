import { TypePerson } from '../type-person/type-person.entity';
import { Person } from '../person/person.entity';

export class AuthSingninDto {
    email: string;
    password: string;
}

export class AuthSignupDto {
    names: string;
    surnames: string;
    email: string;
    password: string;
    typePerson: TypePerson;
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
