const express = require('express'); 
const router = express.Router()
const productCtlr = require('../controllers/productController')

router.get('/', productCtlr.index)

router.post('/', productCtlr.create)

router.get('/new', productCtlr.form)

router.get('/:id', productCtlr.show)

router.post('/:id', productCtlr.update)

router.get('/:id/edit', productCtlr.form)

router.get('/:id/delete', productCtlr.remove)

module.exports = router