const {Router} = require('express')
const colorController = require('../controllers/colorController')
const router = new Router()

router.post('/get',colorController.getColor)
router.post('/add', colorController.addColor)
router.post('/update', colorController.updateColor)
router.post('/del', colorController.delColor)

module.exports = router