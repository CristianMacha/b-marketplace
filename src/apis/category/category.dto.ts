import { Category } from './category.entity';

export class CategoryWriteDto {
    name: string;
    description: string;
}

export class CategoryReadDto {
    id: number;
    name: string;
    description: string;
    constructor(source: Category) {
        this.id = source.id;
        this.name = source.name;
        this.description = source.description;
    }
}
