const Sequelize = require('./../../config/db')
const Event = Sequelize.import('./../../model/event')


module.exports = (req, res) => {
  Event.findById(req.params.id)
       .then( (event) => {
            return res.render('events/show', {
              title: 'Event - ' + event.name, 
              msg: 'Show -  ' + event.name,
              event
            })
        } )
}