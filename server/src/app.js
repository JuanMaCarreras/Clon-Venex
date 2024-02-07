import morgan from 'morgan'
import express from 'express'
import cors from 'cors'
import productsRouters from './routes/products.routes.js'
import { auth } from 'express-openid-connect'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

//Auth0
const { CLIENT_ID, SECRET, DOMAIN } = process.env

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
    secret: { SECRET },
    baseURL: 'http://localhost:3000',
    clientID: { CLIENT_ID },
    issuerBaseURL: { DOMAIN }
}))

app.use(productsRouters)

export default app
