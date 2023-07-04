const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String
    },
    productPortsGE: {
        type: String
    },
    productPortsSFP: {
        type: String
    },
    productMontage: {
        type: String
    },
    productType: {
        type: String
        },
        productImage: {
            type:String
        },
    cloudinaryPublicId: {
        type:String
    }
});

const ProductModel = mongoose.model('ProductModel', productSchema)
module.exports = ProductModel