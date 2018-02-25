const Sequelize = require('./../../config/db')
const Event = Sequelize.import('./../../model/event')

module.exports = (req, res) => {

  Event.update(req.body, { where: { id: req.params.id } })
       .then( () => res.redirect('/events') )

}