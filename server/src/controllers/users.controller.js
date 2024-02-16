import Users from '../models/Users.js'

export const createUser = async (req, res) => {

    try {

        const { id, email, password } = req.body

        const newUser = await Users.create({
            auth0Id: id,
            email,
            password,
        })

        res.status(201).json(newUser)

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }


}

export const getAllUsers = (req, res) => {
    try {

        const getAllUsers = Users.findAll()

        getAllUsers.lenght === 0 ? res.status(404) :

            res.status(200).json(getAllUsers)

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }

}


