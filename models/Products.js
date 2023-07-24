fetch('https://fakestoreapi.com/products?limit=25')
  .then(result => result.json())
  .then(json => {
    console.log(json)})  
  

const products = [
  {
    "id":"1",
    "title": 'Air Jordan',
    "slug": 'Jordan-1-Retro',
    "price": 280.00,
    "is_published": "true",
    "description": "Jordan 1's a all time Classic, turn your style up. Business man/woman, Athlete, Doctor, Js go with any attire"
  },
  {
    "id":"2",
    "title": 'Air Jordan',
    "img": "https://images.stockx.com/360/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined/Images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined/Lv2/img19.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1665692308&h=384&q=57",
    "slug": 'Jordan-1-Retro-High-OG',
    "price": 340.00,
    "is_published": "true",
    "description": "Jordan 4 a all time Classic, turn your style up. Bussiness man/woman, Athlete, Doctor, Js go with any attire"
  },
  {
    "id":"3",
    "title": 'Nike',
    "img": "https://images.stockx.com/360/Nike-Dunk-Low-Chicago-Split/Images/Nike-Dunk-Low-Chicago-Split/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1688757719&h=384&q=57",
    "slug": 'Dunk-Low',
    "price": 136.00,
    "is_published": "true",
    "description": "Skater,turn your style up. Bussiness man/woman, Athlete, Doctor, Js go with any attire"
  },
  {
    "id":"4",
    "title": 'Adidas',
    "img": "https://images.stockx.com/360/adidas-Yeezy-Slide-Black/Images/adidas-Yeezy-Slide-Black/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1646687558&h=384&q=57",
    "slug": 'YEEZY-Slide-Onyx',
    "price": 126.00,
    "is_published": "true",
    "description": "First revealed in February 2022 at the Donda 2 listening event in Miami, the adidas Yeezy Slide Onyx features an all-black foam construction with a soft footbed for comfort."
  },
  {
    "id":"5",
    "title": 'Puma',
    "img": "https://stockx-assets.imgix.net/media/Product-Placeholder-Default-20210415.jpg?fit=fill&bg=FFFFFF&auto=compress&dpr=1&trim=color&w=576&h=384&fm=avif&q=57",
    "slug": 'LaMelo-Ball-MB.02',
    "price": 215.00,
    "is_published": "true",
    "description": "Rick and Morty are back for 2023 NBA All-Star Weekend, collaborating with Puma and LaMelo Ball for the release of the Puma LaMelo Ball MB.02 Rick & Morty Adventures sneaker." 
    
  },
  {
    "id":"6",
    "title": 'Fear Of God',
    "img": "https://images.stockx.com/images/Fear-of-God-Essentials-Hoodie-Black.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1686151910&q=57",
    "slug": 'Fear-Of-God-Essentials-Hoodie',
    "price": 107.00,
    "is_published": "true",
    "description": "The Essentials hoodie has been redesigned with increased volume in the body and sleeves, creating a soft, round, cropped silhouette. New details include a mock neckline and side seam pockets to provide functionality."
    
  },
  {
    "id":"7",
    "title": 'Off-White',
    "img": "https://images.stockx.com/images/Fear-of-God-Essentials-Hoodie-Black.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1686151910&q=57",
    "slug": 'Catalina-Rectangular-Frame-Sunglasses',
    "price": 252.00,
    "is_published": "true",
    "description": ""
    
  },
]

const all = () => {
  return products
}

const find = (id) => {
  // const id = Number(req.params.id)
  return products.find(p => p.id === id)
}

const create = (product) => {
  const id = Number(products[products.length -1].id) + 1 + ""
  products.push({id, ...product})
  return products[products.length - 1]
}

const update = (id, product) => {
  products = products.map((p) => {
      return (p.id === id) ? product : p
  })
  return products
}

const remove = (id) => {
  products = products.filter(p => p.id !== id)
  return products
}


module.exports = {all, find, update, create, remove}