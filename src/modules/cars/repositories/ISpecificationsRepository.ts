import { ISpecificationDTO } from '../dtos/ISpecificationDTO';
import { Specification } from '../model/Specification';

interface ISpecificationsRepository {
  create(data: ISpecificationDTO): void;
  findByName(name: string): Specification | undefined;
  list(): Specification[];
}

export { ISpecificationsRepository };
