import Sequelize from 'sequelize'

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/venex`,
    {
        logging: false,
        native: false,
    },
)
