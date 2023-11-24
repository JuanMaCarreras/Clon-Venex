import { DataTypes } from 'sequelize'
import sequelize from '../db'
import Users from './users'

export const Products = sequelize.define('products', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
    },
    availability: {
        type: DataTypes.BOOLEAN,
    },
})

Products.belongsToMany(Users, { through: 'Users_products' })
Users.belongsToMany(Products, { through: 'Users_products' })
