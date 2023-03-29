const express = require('express');
const res = express.response;
const Producto = require('../models/producto');

const getPruductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getOneProducto = async (req, res) => {
    const { id } = req.params;
    try {
    const producto = await Producto.findById(id);

    if (!producto) {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
    else {
        res.status(200).json(producto);
    }
    }
    catch (error) {
    res.status(404).json({ message: error.message });
    }
}

const createProducto = async (req, res) => {
    const producto = req.body;
    const newProducto = new Producto(producto);
    try {
        await newProducto.save();
        res.status(201).json(newProducto);
        console.log(newProducto)
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const updateProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findById(id);

        if (!producto) {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
        else {

        const { title, price , description } = req.body;

        producto.title = title;
        producto.price = price;
        producto.description = description;

        await producto.save();

        res.status(200).json(producto);
        
    }
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const deleteProducto = async (req, res) => {
    try {
        const { id } = req.params;

        const producto = await Producto.findById(id);

        if (!producto) {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
        else {
            await producto.deleteOne();
            res.status(200).json({ message: 'Producto eliminado' });
        }

    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}

module.exports = {
    getPruductos,
    getOneProducto,
    createProducto,
    updateProducto,
    deleteProducto
}


