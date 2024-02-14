import Users from "../models/Users"

export const createUser = async (req, res) => {

    try {

        const { email, password } = req.body

        const createNewUser = await Users.create({
            email,
            password,
        })

        res.status(201).json(createNewUser)

    } catch (error) {
        console.log('create user', error)
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


