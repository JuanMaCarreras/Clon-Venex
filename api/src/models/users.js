import { DataTypes } from 'sequelize'
import sequelize from '../db.js'

const Users = sequelize.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

export default Users
