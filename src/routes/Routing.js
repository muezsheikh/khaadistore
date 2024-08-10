import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProductsUi from '../pages/ProductsUi'
import ProdType from './../pages/ProdType'
import CatProd from '../pages/CatProd'
import SingleProd from '../pages/SingleProd'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:collection' element={<ProductsUi />} />
        <Route path='/:collection/:type' element={<ProdType />} />
        <Route path='/:collection/:type/:category' element={<CatProd />} />
        <Route
          path='/:collection/:type/:category/:id'
          element={<SingleProd />}
        />
      </Routes>
    </>
  )
}

export default Routing

