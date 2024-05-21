import bcrypt from 'bcrypt'
import Users from '../models/Users.js'
// import Roles from '../models/Roles.js'
import jwt from 'jsonwebtoken'
import config from '../config.js'

export const signUp = async (req, res) => {

    const { name, email, password, role } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    try {

        const user = await Users.create({
            name,
            email,
            password: hashedPassword
        })

        console.log(user)

        const token = jwt.sign({ id: user.id }, config.SECRET, { expiresin: 86400 })



        res.status(200).json({ token })

    } catch (error) {

        console.log(error)
        res.status(500).json({ error: 'Error al Registrarse ' })

    }
}

export const signIn = (req, res) => {

    const { email, password } = req.body

    console.log(email, password)


    res.json('Sign In')

}

