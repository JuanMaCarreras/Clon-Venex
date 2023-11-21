import { Router } from 'express'
import {
    getProducts,
    createProducts,
} from '../controllers/products.controller.js'

const router = Router()

router.get('/products', getProducts)
router.post('/products', createProducts)
router.put('/products/:id')
router.delete('/products/:id')
router.get('/products/:id')

export default router
