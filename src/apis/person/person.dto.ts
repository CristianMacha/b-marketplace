import { Store } from '../store/store.entity';

export class PersonWriteDto {
    names: string;
    surnames: string;
    email: string;
    password: string;
    dni: string;
    photo: string;
    sexo: boolean;
    store: Store;
}
