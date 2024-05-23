import app from './src/app.js'
import sequelize from './src/db.js'
import { createRoles } from './src/libs/initialRoles.js'
import './src/models/Products.js'

sequelize.sync({ force: true }).then(async () => {
    console.log('Data base connected')
    createRoles()
    app.listen(3000, () => {
        console.log('Server lintener on port', 3000)
    })
})
