const Sequelize = require('./../../config/db')
const Event = Sequelize.import('./../../model/event')

module.exports = (req, res) => {
  
  Event.findAll()
       .then( (events) => {
          return res.render('events/index',{
            title: 'List All Events',
            msg: 'All Events',
            events
          })
       })

}