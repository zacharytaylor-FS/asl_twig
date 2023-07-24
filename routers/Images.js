const express = require('express'); 
const router = express.Router()
const imageCtrl = require('../controllers/imagesController');

// Loading in middleware for FileUpload
// const { uploadImage } = require('../middlewares');

router.get('/', imageCtrl.index)

router.get('/new', imageCtrl.form)

router.get('/:id', imageCtrl.show)

router.get('/:id/edit', imageCtrl.form)

// Added our uploadImage middleware to our create route
////router.post('/', imageCtrl.create, uploadImage)
router.post('/', imageCtrl.create)
// Added our uploadImage middleware to our update route
///router.post('/:id', imageCtrl.update, uploadImage)
router.post('/:id', imageCtrl.update)


router.get('/:id/delete', imageCtrl.remove)

module.exports = router