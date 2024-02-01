import { Router } from 'express'
import {
    getAllProducts,
    createProducts,
    searchProducts,
    getProductsById,
    getCategory,
    getBrand,
} from '../controllers/products.controller.js'

const router = Router()

router.get('/products', getAllProducts)
router.get('/products/:id', getProductsById)
router.get('/products/:name', searchProducts)
router.get('/products/category/:category', getCategory)
router.get('/products/brand/:brand', getBrand)
router.post('/products', createProducts)
router.put('/products/:id')
router.delete('/products/:id')

export default router
