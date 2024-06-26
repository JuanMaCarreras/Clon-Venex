import { Router } from 'express'
import * as authCtrl from '../controllers/auth.controller.js'
import { validateSignUp, validateSignIn } from '../validators/auth.validator.js'

const router = Router()

router.post('/auth/signup', validateSignUp, authCtrl.signUp)
router.post('/auth/signin', validateSignIn, authCtrl.signIn)



export default router










