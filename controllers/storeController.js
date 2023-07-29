const { Products, Variant, Image } = require('../models')

const index = async (req, res) => {
    const products = await Products.findAll({
        include: [
            { model: Variant, include: [Image] }
        ] 
    })
    res.render('views/store/index', { products })    
}
const show = async (req, res) => {
    const product = await Products.findOne({
        where: {slug: req.params.slug},
        include: [
            { model: Variant, include: [Image] }
        ]
    })
    let variant = product.Variants[0]

    if(req.query.v) {
        variant = product.Variants.find(v => v.slug === req.query.v)
    }
    res.render('views/store/show', { product, variant })    
}

module.exports = { index, show }