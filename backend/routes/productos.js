const app = require('express').Router();
const { getOneProducto, getPruductos, createProducto, updateProducto, deleteProducto } = require('../controllers/productos.js');

app.get('/', getPruductos);
app.get('/:id', getOneProducto);
app.post('/create', createProducto);
app.put('/update/:id', updateProducto);
app.delete('/delete/:id', deleteProducto);

module.exports = app;