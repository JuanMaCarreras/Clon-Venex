import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/venex`,
    {
        logging: false,
        native: false,
    },
)

export default sequelize
