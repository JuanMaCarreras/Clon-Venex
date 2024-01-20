import { Router } from 'express'
import {
    getAllProducts,
    createProducts,
    searchProducts,
    getProductsById,
} from '../controllers/products.controller.js'

const router = Router()

router.get('/products', getAllProducts)
router.get('products/:id', getProductsById)
router.get('/products/:name', searchProducts)
router.post('/products', createProducts)
router.put('/products/:id')
router.delete('/products/:id')

export default router
