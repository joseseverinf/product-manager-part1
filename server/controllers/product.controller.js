const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Ingresa tu producto"
    });
}
    // Método para crear un producto
module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}