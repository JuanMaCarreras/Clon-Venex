import { Router } from 'express'
import * as productsCtrl from '../controllers/products.controller.js'
import { verifyToken, authorizeRole } from '../middleware/auth.jwt.js'

const router = Router()

router.get('/products', productsCtrl.getAllProducts)
router.get('/products/:id', productsCtrl.getProductsById)
router.get('/products/:name', productsCtrl.searchProducts)
router.get('/products/category/:category', productsCtrl.getCategory)
router.get('/products/brand/:brand', productsCtrl.getBrand)

router.post('/products', verifyToken, authorizeRole(['admin']), productsCtrl.createProducts)
router.put('/products/:id', verifyToken, authorizeRole(['admin']), productsCtrl.updateProductsById)
router.delete('/products/:id')



export default router
