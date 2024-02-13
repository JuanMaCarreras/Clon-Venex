import Users from "../models/Users"

export const createUser = async (req, res) => {

    try {

        const { email, password } = req.body

        const createNewUser = await Users.create({
            email,
            password,
        })

        res.status(200).json(createNewUser)

    } catch (error) {
        console.log('create user', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }


}

export const getAllUsers = (req, res) => {

}