import bcrypt from 'bcrypt'
import Users from '../models/Users.js'
// import Roles from '../models/Roles.js'

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


        res.json('Todo ok rey')

    } catch (error) {

        console.log(error)
        res.status(500).json({ error: 'Error al Registrarse ' })

    }
}

export const signIn = (req, res) => {
    res.json('Sign In')

}

