const Sequelize = require('./../../config/db')
const Event = Sequelize.import('./../../model/event')

module.exports = (req, res) => {

  Event.findById(req.params.id)
       .then( (event) => {
         return res.render('events/edit', {
           title: 'Edit - ' + event.name,
           msg: 'Edit - ' + event.name,
           event
         })
       } )

}

