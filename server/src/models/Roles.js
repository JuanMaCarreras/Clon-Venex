import { DataTypes } from 'sequelize'
import sequelize from '../db'
import Users from './Users'


const Roles = sequelize.define('role', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    }

})



Users.belongsToMany(Roles, { through: 'UserRoles' })
Roles.belongsToMany(Users, { through: 'UserRoles' })





export default Roles