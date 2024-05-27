import Roles from '../models/Roles.js';

export const createRoles = async () => {
    try {
        const countRole = ['user', 'moderator', 'admin']

        for (let role of countRole) {
            const foundRole = await Roles.findOne({ where: { name: role } })

            if (!foundRole) {
                await Roles.create({ name: role });
                console.log(`Role ${role} created`);
            }

        }

    } catch (error) {
        console.error('Error initializing roles:', error);
    }
}