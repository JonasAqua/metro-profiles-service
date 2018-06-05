const express = require('express')
const dbConfig = require('./config/db')
const routersConfig = require('./config/routers')
const middlewareConfig = require('./config/middleware')

const appName = 'Profiles Service'
const port = process.env.PORT

console.log('--- ' + appName + ' ---')

dbConfig.inititateConnection()

let app = express()
app = middlewareConfig.setUpMiddleware(app)
app = routersConfig.addRoutersToApp(app)
app.listen(port, () => console.log(appName + ' listening on port ' + port + '!'))
