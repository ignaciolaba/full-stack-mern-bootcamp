import React, { useEffect } from 'react'
import { redirect, useParams } from 'react-router-dom'
import { deleteProduct } from '../../helpers/deleteProduct'

export const RemovePage = () => {
    const id = useParams().id 
    
    useEffect(() => {
        const removeData = async () => {
            await deleteProduct(id)
        }
        removeData()
    }, [id])

    setTimeout(() => {
        window.location.href = '/'
    }, 1000)


  return (
    <div>Eliminando...</div>
  )
}
