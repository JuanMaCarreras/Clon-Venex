import { Router } from 'express'
import * as authCtrl from '../controllers/auth.controller.js'


const router = Router()

router.post('/auth/signup', authCtrl.signUp)
router.post('/auth/signin', authCtrl.signIn)



export default router










