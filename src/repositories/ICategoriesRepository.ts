import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { Category } from '../modules/cars/model/Category';

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void;
  list(): Category[];
  findByName(name: string): Category;
}

export { ICategoriesRepository };
