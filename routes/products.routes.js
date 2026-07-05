import { Router } from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import { 
    getAllProducts, 
    getProductById, 
    createProduct, 
    deleteProduct 
} from '../controllers/products.controller.js';

const router = Router();

router.use(verifyToken); 

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/create', createProduct);
router.delete('/:id', deleteProduct);

export default router;