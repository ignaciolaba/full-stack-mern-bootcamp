
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { EditPage } from '../pages/editPage/EditPage'
import { Home } from '../pages/home/Home'
import { ProductPage } from '../pages/productPage/ProductPage'
import { RemovePage } from '../pages/removePages/RemovePage'

export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="*" element={<h1>404 - Not Found</h1>} />
            <Route path='remove/:id' element={<RemovePage />} />
            <Route path='/edit/:id' element={<EditPage />} />
        </Routes>
    </div>
  )
}
