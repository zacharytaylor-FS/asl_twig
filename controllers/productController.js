const Products = require('../models/Products')
// const test_products = require('../data/db_products')
const index = async (req, res) => {
  let products = Products.all()
  // console.log(products);
  if(products) {
    // products = await products.find();
    res.render('views/products/index', {products})
    // res.json(products)
  }

}

const form = async (req, res) => {
  if(req.params.id) {
    const product = await Products.find(req.params.id)
    res.render('views/products/edit', { product })
  } else {
    res.render('views/products/create', {})
  }
}

const show =  async (req, res) => {
  const product = await Products.find(req.params.id)

  if(product) {
    res.render('views/products/show', {product})
  }

}

const create = async (req, res) => {
  const product = await Products.create(req.body)

  res.redirect('/products/' + product.id)
}

const update = async (req, res) => {
  const product = await Products.update(req.body, {
    where: { id: req.params.id }
  })
  res.redirect(`/products/${product.id}`)
}

const remove = async (req, res) => {
  const product = await Products.remove(req.params.id)
  res.redirect('/products')
}


module.exports = { index, show, create, form ,remove, update }