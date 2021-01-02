import { Role } from "../role/role.entity";

export class AuthSingninDto {
    email: string;
    password: string;
}

export class AuthSignupDto {
    names: string;
    surname: string;
    email: string;
    password: string;
    role: Role;
}
