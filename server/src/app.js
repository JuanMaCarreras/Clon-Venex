import morgan from 'morgan'
import express from 'express'
import cors from 'cors'
import productsRouters from './routes/products.routes.js'
import usersRouters from './routes/users.routes.js'
import { auth } from 'express-openid-connect'
import dotenv from 'dotenv'
dotenv.config()

const app = express()


//Auth0
const { CLIENT_ID, SECRET, DOMAIN } = process.env

// console.log({ CLIENT_ID })
// const config = {
//     authRequired: false,
//     auth0Logout: true,
//     secret: { SECRET },
//     baseURL: 'http://localhost:3000',
//     clientID: { CLIENT_ID },
//     issuerBaseURL: { DOMAIN }
// }

// Middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

//Auth0
app.use(auth({
    authRequired: false,
    auth0Logout: true,
    secret: 'CVGIH2F8FH-4KCpHz1lpYeKV02rh-uctdajKAs5WtR6WrOPxCJ19PTKe-xfPMGli',
    baseURL: 'http://localhost:3000',
    clientID: 'd3IZZHNzzeu1lBE6mOUhBoxjYZNRMVCS',
    issuerBaseURL: 'https://dev-ot4bc1zh0nhulgid.us.auth0.com'
}))

app.use(productsRouters)
app.use(usersRouters)

export default app
