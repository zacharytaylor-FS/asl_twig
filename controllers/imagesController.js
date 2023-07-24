const { Image } = require('../models/Images')

const index = async (req, res) => {
  let images;
  if(images) {
    images = await Image.findAll();
    console.log(images);
    res.render('views/images/index', {images})
  } else {
    res.render('views/images/index', {})

  }

}

const form = async (req, res) => {
  if(req.params.id) {
    const image = await Image.findByPk(req.params.id)
    res.render('views/images/edit', { image })
  } else {
    res.render('views/images/create', {})
  }
}

const show =  async (req, res) => {
  const image = await Image.findByPk(req.params.id)
  res.render('views/images/show', { image })
}

const create = async (req, res) => {
  const image = await Image.create(req.body)
  res.redirect('/images')
}

const update = async (req, res) => {
  const image = await Image.update(req.body, {
    where: { id: req.params.id }
  })
  res.redirect(`/images/${req.params.id}`)
}

const remove = async (req, res) => {
  const deleted = await Image.destroy({
    where: { id: req.params.id }
  })
  res.redirect('/images')
}


module.exports = { index, show, create, form ,remove, update }