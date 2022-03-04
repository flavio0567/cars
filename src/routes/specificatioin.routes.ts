import { Router } from 'express';

const specificationRoutes = Router();

specificationRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  return response.json();
});

specificationRoutes.get('/', (request, response) => {
  const all = 
} )

export { specificationRoutes };
