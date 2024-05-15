import morgan from 'morgan'
import express from 'express'
import cors from 'cors'
import productsRouters from './routes/products.routes.js'
import usersRouters from './routes/users.routes.js'
import authRouters from './routes/auth.routes.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()


// Middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())


app.use(productsRouters)
app.use(authRouters)
app.use(usersRouters)

export default app
