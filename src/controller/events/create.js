const Sequelize = require('../../config/db')
const Event = Sequelize.import('../../model/event')


module.exports = (req, res) => {
  
  Event.create(req.body)
       .then( () => res.redirect('/events') )

}