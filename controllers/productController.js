const { Products } = require('../models')
// const test_products = require('../data/db_products')
const index = async (req, res) => {
  // console.log(products);
  let products; 
  if(products) {
    products = await Products.findAll();
    res.render('views/products/index', {products})
  } else {
    res.render('views/products/index', [])
  }

}

const form = async (req, res) => {
  if(req.params.id) {
    const product = await Products.findByPk(req.params.id)
    res.render('views/products/edit', { product })
  } else {
    res.render('views/products/create', {})
  }
}

const show =  async (req, res) => {
  const product = await Products.findByPk(req.params.id)
  res.render('views/products/show', { product })
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
  const deleted = await Products.destroy({
    where: { id: req.params.id }
  })
  res.redirect('/products')
}


module.exports = { index, show, create, form ,remove, update }