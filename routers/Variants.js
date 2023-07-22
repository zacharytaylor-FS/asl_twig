const express = require('express'); 
const router = express.Router()
const variantCtlr = require('../controllers/variantController')

router.get('/', variantCtlr.index)

router.post('/', variantCtlr.create)

router.get('/new', variantCtlr.form)

router.get('/:id', variantCtlr.show)

router.post('/:id', variantCtlr.update)

router.get('/:id/edit', variantCtlr.form)

router.get('/:id/delete', variantCtlr.remove)

module.exports = router