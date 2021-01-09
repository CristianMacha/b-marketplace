import { TypePerson } from '../type-person/type-person.entity';

export class AuthSingninDto {
    email: string;
    password: string;
}

export class AuthSignupDto {
    names: string;
    surname: string;
    email: string;
    password: string;
    typePerson: TypePerson;
}
