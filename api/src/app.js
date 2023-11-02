import morgan from 'morgan'
import express from 'express'

const app = express()

// Middleware
app.use(morgan('dev'))
