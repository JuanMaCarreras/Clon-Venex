import { Sequelize, DataTypes } from 'sequelize'
import sequelize from '../db'

const users = Sequelize.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

export default users
