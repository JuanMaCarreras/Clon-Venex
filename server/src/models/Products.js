import { DataTypes } from 'sequelize'
import sequelize from '../db.js'
import Users from './Users.js'

const Products = sequelize.define('products', {
    id: {
        // type: DataTypes.UUID,
        // defaultValue: DataTypes.UUIDV4,
        // autoincrement: true,
        // primaryKey: true,
        // allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
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
        //marca
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

export default Products
