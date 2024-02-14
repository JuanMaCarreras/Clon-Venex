import { Router } from 'express'
import { createUser } from '../controllers/users.controller.js'


const router = Router()


router.post('/register', createUser)
router.get('/all_users')




export default router