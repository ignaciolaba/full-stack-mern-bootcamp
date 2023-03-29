import React from 'react'
import { useState, useEffect } from 'react';
import { postCreateProduct } from '../../../helpers/postCreateProduct';
import { getAllProducts } from '../../../helpers/getAllProducts';
import { Link } from 'react-router-dom';

export const FormHome = () => {

    const [data, setData] = useState({
        title: '',
        price: '',
        description: ''
    });

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllProducts()
            setProducts(data)

        }
        fetchData()
    }, [data])

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        postCreateProduct(data)
        setData({
            title: '',
            price: '',
            description: ''
        })

    }

  return (
    <div className="home_container">
    <div className='form'>
        <h1>Product Manager</h1>
        <form onSubmit={handleSubmit}>
            <div className="input_field">
                <label htmlFor="tilte">Title</label>
                <input type="text" onChange={handleChange} value={data.title} name="title" id="title" />
            </div>
            <div className="input_field">
                <label htmlFor="price">Price</label>
                <input type="number" onChange={handleChange} value={data.price} name="price" id="price" />
            </div>
            <div className="input_field">
                <label htmlFor="description">Description</label>
                <input type="text" onChange={handleChange} value={data.description} name="description" id="description" />
            </div>
            <div className="input_field_button">
                <button type="submit">Create</button>
            </div>
        </form>
        <hr />
        </div>
        
        <div className='list_of_products_container'>
        <h1>List of Products</h1>
        {products.map((product) => (
            <div key={product._id}>
                <div className="sub_container">
                    <Link to={`/product/${product._id}`}>
                        <h3>{product.title}</h3>
                    </Link>
                    <Link to={`/remove/${product._id}`}>
                        <p>eliminar</p>
                    </Link>
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}
