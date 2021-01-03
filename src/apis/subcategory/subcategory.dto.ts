import { Category } from '../category/category.entity';

export class SubCategoryWriteDto {
    name: string;
    description: string;
    category: Category;
}
