const router = require('../routes')

function addRoutersToApp(app) {
  app.use('/profiles', router)
  return app
}

module.exports = {addRoutersToApp}
