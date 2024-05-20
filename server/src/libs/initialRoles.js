import Roles from "../models/Roles"

export const initialRoles = async () => {

    try {
        const count = await Roles.count()

        if (count > 0) return

        const roles = ['user', 'moredator', 'admin']


        const rolsePromise = roles.map(roleName => Roles.create({ name: roleName }))

        await Promise.all(rolsePromise)

        console.log('Roles have been created')

    } catch (error) {

        console.log(error)

    }

}