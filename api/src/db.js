import Sequelize from 'sequelize'
import { config } from 'dotenv'
config()

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/venex`,
    {
        logging: false,
        native: false,
    },
)

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
//__________________________________tabla intermedia
Country.belongsToMany(Activity, { through: 'country_activity' })
Activity.belongsToMany(Country, { through: 'country_activity' })

export default sequelize
