const {Schema, model} = require('mongoose');

const ProductosSchema = Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }

})

module.exports = model('Productos', ProductosSchema);