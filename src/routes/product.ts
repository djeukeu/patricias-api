import { Router } from 'express';

import { getAllProductController } from 'src/controllers/product';

const productRouter = Router();

productRouter.get('/', getAllProductController);

export default productRouter;
