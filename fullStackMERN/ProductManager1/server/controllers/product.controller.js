const { Product } = require("../models/product.model");

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPerson = (request, response) => {
    const { title, price,discription } = request.body;
    Product.create({
        title,
        price,
        discription
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.findAllProduct = (req, res) => {
    Product.find()
        .then(allDaProduct => res.json({ products: allDaProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}