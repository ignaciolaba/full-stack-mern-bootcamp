import React, { useEffect } from 'react'
import { redirect, useParams } from 'react-router-dom'
import { useState } from 'react'
import { getOneProducto } from '../../helpers/getOneProduct'
import { updateProduct } from '../../helpers/updateProduct'

export const EditPage = () => {
    const id = useParams().id
    const [product, setProduct] = useState({
        id: id,
        title: '',
        price: '',
        description: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            const response = await getOneProducto(id)
            setProduct(response)
        }
        fetchData()
    }, [id])


    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(product)
        if ( updateProduct(product) ) {
            alert('Product editado correctamente')
            setTimeout(() => {
                window.location.href = '/'
            }, 1000)
        } else {
           return alert('Error')
    }

}



  return (

    <div className='form'>
        <h1>Product Manager</h1>
        <form onSubmit={handleSubmit}>
            <div className="input_field">
                <label htmlFor="tilte">Title</label>
                <input type="text" onChange={handleChange} value={product.title} name="title" id="title" />
            </div>
            <div className="input_field">
                <label htmlFor="price">Price</label>
                <input type="number" onChange={handleChange} value={product.price} name="price" id="price" />
            </div>
            <div className="input_field">
                <label htmlFor="description">Description</label>
                <input type="text" onChange={handleChange} value={product.description} name="description" id="description" />
            </div>
            <div className="input_field_button">
                <button type="submit">Edit</button>
            </div>
        </form>
        <hr />
        </div>

  )
}