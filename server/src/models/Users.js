import { DataTypes } from 'sequelize'
import sequelize from '../db.js'

const Users = sequelize.define('users', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
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
    },
    role: {
        type: DataTypes.ENUM('user', 'admin', 'moderator'),
        allowNull: false,
        defaultValue: 'user'
    }

})


export default Users
