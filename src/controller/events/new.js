const Sequelize = require('../../model/event')
const Event = Sequelize.import('../../model/event')


module.exports = (req, res) => {
  return res.render('events/new', {
		title: 'New Event',
		event: new Event()
	}) 
}