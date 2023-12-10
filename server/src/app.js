import morgan from 'morgan'
import express from 'express'
import cors from 'cors'
import productsRouters from './routes/products.routes.js'

const app = express()

// Middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use(productsRouters)

export default app
