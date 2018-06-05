const bodyParser = require('body-parser')

function setUpMiddleware(app) {
  app.use(bodyParser.json())
  return app
}

module.exports = {setUpMiddleware}
