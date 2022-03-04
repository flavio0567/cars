import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { Category } from '../model/Category';

interface ICategoriesRepository {
  create(data: ICreateCategoryDTO): void;
  list(): Category[];
  findByName(name: string): Category | undefined;
}

export { ICategoriesRepository };
