import morgan from 'morgan'
import express from 'express'

const app = express()

// Middleware
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

export default app
