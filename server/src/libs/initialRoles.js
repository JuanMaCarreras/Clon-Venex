import Roles from '../models/Roles.js';

export const createRoles = async () => {
    try {
        const count = await Roles.count()

        if (count === 0) {
            await Promise.all([
                Roles.create({ name: 'user' }),
                Roles.create({ name: 'moderator' }),
                Roles.create({ name: 'admin' }),
            ])

            console.log('Roles initialized')
        }
    } catch (error) {
        console.error('Error initializing roles:', error);
    }
};