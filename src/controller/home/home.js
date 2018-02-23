const Sequelize = require('../../config/db')
const Event = Sequelize.import('../../model/event')


module.exports = (req, res) => {
  return res.render('home')
}