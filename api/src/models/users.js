import { DataTypes } from 'sequelize'
import sequelize from '../db'

export const Users = sequelize.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})
