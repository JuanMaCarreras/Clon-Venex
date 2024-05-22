import bcrypt from 'bcrypt'
import Users from '../models/Users.js'
import Roles from '../models/Roles.js'
import jwt from 'jsonwebtoken'
import config from '../config.js'

export const signUp = async (req, res) => {

    const { name, email, password, roles } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    try {

        const newUser = await Users.create({
            name,
            email,
            password: hashedPassword
        })

        console.log(newUser)

        const token = jwt.sign({ id: newUser.id }, config.SECRET, { expiresin: 86400 })


        if (roles) {
            const findRoles = await Roles.find({ where: { name: roles } })
            newUser.roles = findRoles.map(role => role.id)

        } else {

        }


        res.status(200).json({ token })

    } catch (error) {

        console.log(error)
        res.status(500).json({ error: 'Error al Registrarse ' })

    }
}

export const signIn = async (req, res) => {

    const { email, password } = req.body

    const user = await Users.findOne({ email })

    if (!user) {
        res.status(400).json({ error: 'User Not Found' })
    }


    res.json('Sign In')

}

