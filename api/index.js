const express = require('express')
const app = express()
require('./dbModels/dbConfig')
const postsRoutes = require('./routes/postsController')
const cors = require('cors')

app.use(cors())
app.use('/', postsRoutes)

app.listen(5500, () => console.log('server started on port 5500'))
