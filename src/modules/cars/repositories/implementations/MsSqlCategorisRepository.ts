import { ICreateCategoryDTO } from '../../dtos/ICreateCategoryDTO';
import { Category } from '../../model/Category';
import { ICategoriesRepository } from '../ICategoriesRepository';

class MsSqlCategoriesRepository implements ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
  }
  list(): Category[] {
    return null;
  }
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
}

export { MsSqlCategoriesRepository };
