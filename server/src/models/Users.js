import { DataTypes } from 'sequelize'
import sequelize from '../db.js'

const Users = sequelize.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
        defaultValue: 'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg'
    }
})

export default Users
