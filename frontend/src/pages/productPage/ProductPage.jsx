import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { getOneProducto } from '../../helpers/getOneProduct'

export const ProductPage = () => {
    const id = useParams().id
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            const response = await getOneProducto(id)
            console.log(response)
            setProduct(response)
        }
        fetchData()
    }, [id])

    console.log(product)

  return (
    <div className='product_page_container'>
        <h1>Título: {product.title}</h1>
        <h2>Precio: ${product.price}</h2>
        <p>Descripción: {product.description}</p>
        <div className="links">
            <a href={`/remove/${id}`}>eliminar</a>
            <a href={`/edit/${id}`}>editar</a>
        </div>
    </div>
  )
}
