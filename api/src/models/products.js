import { Sequelize, DataTypes } from 'sequelize'

const products = Sequelize.define('products', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    image: {
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
    stok: {
        type: DataTypes.INTEGER,
    },
})

export default products
