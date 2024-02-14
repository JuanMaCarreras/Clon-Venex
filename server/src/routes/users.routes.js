import { Router } from 'express'
import {
    createUser,
    getAllUsers
}
    from '../controllers/users.controller.js'


const router = Router()


router.post('/auth/callback', createUser)
router.get('/all_users', getAllUsers)




export default router