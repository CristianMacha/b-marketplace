import { Store } from '../store/store.entity';

export class ProductWriteDto {
    name: string;
    description: string;
    price: number;
    photo: string;
    store: Store;
}
