const express = require('express')
const router = express.Router()


router.get('/new', require('./new'))
router.get('/', require('./find'))
router.post('/', require('./create'))

module.exports = router