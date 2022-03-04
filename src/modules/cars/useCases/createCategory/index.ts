import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

const createCategoryReposiroty = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(
  createCategoryReposiroty,
);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
);

export { createCategoryController };
