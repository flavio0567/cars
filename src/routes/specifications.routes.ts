import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const specificationsRoutes = Router();
const specificationRepository = SpecificationsRepository.getInstance();

specificationsRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoutes.get('/', (request, response) => {
  const specifications = specificationRepository.list();

  return response.json(specifications);
});

export { specificationsRoutes };
