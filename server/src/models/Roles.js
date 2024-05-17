import { DataTypes } from 'sequelize'
import sequelize from '../db.js'


const Roles = sequelize.define('role', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }

})





export default Roles