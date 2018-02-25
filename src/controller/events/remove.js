const Sequelize = require('./../../config/db')
const Event = Sequelize.import('./../../model/event')

module.exports = (req, res) => {

  Event.destroy({ where: { id: req.params.id } })
       .then( () => res.redirect('/events') )

}