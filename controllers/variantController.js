const { Variant, Product } = require('../models')

const index = async (req, res) => {
  let variants;
  if(variants){
    variants = await Variant.findAll();
    console.log(variants);
    res.render('views/variants/index', {variants})
  } else {
    res.render('views/variants/index')
  }
}

const form = async (req, res) => {
  if(req.params.id) {
    const products = await Product.findAll()
    const variant = await Variant.findByPk(req.params.id)
    res.render('views/variants/edit', { variant, products })
  } else {
    res.render('views/variants/create')
  }
}
const show =  (req, res) => {
  const variant = Variant.findByPk(req.params.id)
  res.render('views/variants/show', { variant })
}

const create = async (req, res) => {
  const variant = await Variant.create(...req.body)
  res.redirect('/variants')
}

const update = async (req, res) => {
  const variant = await Variant.create(...req.body, {
    where: { id: req.params.id }
  })
res.redirect(`/variants/ ${req.params.id}`)
}

const remove = async (req, res) => {
  const variant = await Variant.destroy({where: { id: req.params.id }})
  res.redirect('/variants')
}


module.exports = { index, show, create, form ,remove, update }