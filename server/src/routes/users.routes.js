import { Router } from 'express'
import {
    createUser,
    getAllUsers
}
    from '../controllers/users.controller.js'


const router = Router()


router.post('/register', createUser)
router.get('/all_users', getAllUsers)




export default router