import app from './src/app.js'
import sequelize from './src/db.js'
import './src/models/Products.js'
import { createRoles } from './src/libs/initialRoles.js'

sequelize.sync({ force: true }).then(async () => {
    console.log('Data base connected')

    app.listen(3000, () => {
        console.log('Server lintener on port', 3000)
    })
    await createRoles()
})
