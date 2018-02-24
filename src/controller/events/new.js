const Sequelize = require('../../config/db')
const Event = Sequelize.import('../../model/event')


module.exports = (req, res) => {

  return res.render('events/new', {
    title: 'New Event',
    msg: 'Create a new event',
		event: new Event()
  }) 
  
}