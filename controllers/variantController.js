const Variants = require('../models/Variants')
// const { Products } = require('../models/Products')

const index = async (req, res) => {
  let variants = Variants.all()
  // console.log(variants);
  if(variants) {
    // variants = await variants.find();
    res.render('views/variants/index', {variants})
    // res.json(variants)
  } else {
    res.json([])
  }
}

const form = async (req, res) => {
  if(req.params.id) {
    const variant = await Variants.find(req.params.id)
    res.render('views/variants/edit', { variant })
  } else {
    res.render('views/variants/create', {})
  }
}

const show =  async (req, res) => {
  const variant = await Variants.find(req.params.id)
  res.render('views/variants/show', {variant})
}

const create = async (req, res) => {
  const variant = await Variants.create(req.body)

  res.redirect('/variants/' + variant.id)
}

const update = async (req, res) => {
  const variant = await Variants.update(req.body, {
    where: { id: req.params.id }
  })
  res.redirect(`/variants/${variant.id}`)
}

const remove = async (req, res) => {
  const deleted = await Variants.destroy({
    where: { id: req.params.id }
  })
  res.redirect('/variants')
}

module.exports = { index, show, create, form ,remove, update }