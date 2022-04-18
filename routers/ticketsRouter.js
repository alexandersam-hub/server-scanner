const {Router} = require('express')
const ticketsController = require('../controllers/ticketsController')
const router = new Router()

router.post('/get',ticketsController.getTicket)
router.post('/add', ticketsController.addTicket)
router.post('/update', ticketsController.updateTicket)
router.post('/del', ticketsController.delTicket)

module.exports = router