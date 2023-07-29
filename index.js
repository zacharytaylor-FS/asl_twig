const express = require('express');
const morgan = require('morgan');
const app = express()
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Add the following TWO lines to enable file uploads
const fileUpload = require('express-fileupload')
app.use(fileUpload({safeFileNames: true, preserveExtension: true}))

const twig = require('twig')
const productsRouter = require('./routers/Products');
const variantsRouter = require('./routers/Variants');
const imagesRouter = require('./routers/Images');
const storeRouter = require('./routers/Store');
const { index } = require('./controllers/storeController')
app.set('views', __dirname + '/templates')
app.set('view engine', 'twig')

app.use('/public', express.static('public'))

// app.get('/', (req, res) => {
//   // res.render('products/index', {name: "World!", 'users': [
//   //   {name: 'John Boy', email: 'johnboy2121@fullsail.com'},
//   //   {name: 'Shelby Noi', email: 'shellNo1@fullsail.com'},
//   //   {name: 'John Doe', email: 'jdoe@fullsail.com'},
//   //   {name: '', email: ''},
//   //   {name: '', email: ''},
//   // ]})
//   res.render('views/home')
// })

app.get('/', index)
app.use('/store',storeRouter)
app.use('/products',productsRouter)
app.use('/variants',variantsRouter)
app.use('/images',imagesRouter)

app.listen(4000, ()=> console.log('Server is running on port 4000!'))