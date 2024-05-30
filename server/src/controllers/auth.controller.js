import bcrypt from 'bcrypt'
import Users from '../models/Users.js'
import { tokenSign } from '../helpers/token.jwt.js'

export const signUp = async (req, res) => {
    const { name, email, password, role } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    try {

        const newUser = await Users.create({
            name,
            email,
            password: hashedPassword,
            role
        })

        const token = tokenSign(newUser)

        console.log(name, email, password, role)

        res.status(200).json({ token })

    } catch (error) {

        console.log(error)
        res.status(500).json({ error: 'Error registering' })

    }
}

export const signIn = async (req, res) => {

    const { email, password } = req.body

    try {
        const user = await Users.findOne({ where: { email } })

        if (!user) return res.status(400).json({ error: 'User Not Found' })

        const validatePassword = await bcrypt.compare(password, user.password)

        if (!validatePassword) return res.status(401).json({ error: 'Invalid password' })


        const token = tokenSign(user)

        res.status(200).json({ token })

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Login error' })
    }

}

