import { Sequelize, DataTypes } from 'sequelize'
import sequelize from '../db'

const users = Sequelize.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})
