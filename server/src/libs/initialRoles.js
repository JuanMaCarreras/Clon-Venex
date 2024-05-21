import Roles from "../models/Roles.js"

export const createRoles = async () => {

    try {
        const count = await Roles.count()
        console.log(`Number of roles in DB: ${count}`)

        if (count > 0) return;

        const roles = ['user', 'moderator', 'admin']

        const rolePromises = roles.map(roleName => Roles.create({ name: roleName }))

        await Promise.all(rolePromises)

        console.log('Roles have been created')
    } catch (error) {
        console.error('Error creating roles:', error)
    }

}