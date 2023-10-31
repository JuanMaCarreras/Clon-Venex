import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hola Mundo desde el Back</h1>')
})

app.listen(3000, () => {
    console.log('Server lintener on port ', 3000)
})
