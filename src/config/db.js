const Sequelize = require('sequelize')

const conn = new Sequelize({
  database: 'sequel',
  username: 'root',
  password: 'root',
  port: 8889,
  dialect: 'mysql',
  operatorsAliases: Sequelize.Op
})

conn.authenticate()
    .then( () => console.log('OK!!') )
    .catch( () => console.log('ERROR!!') )

module.exports = conn