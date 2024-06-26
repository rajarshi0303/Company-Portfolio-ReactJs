import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ProductAll from './components/portfolio/ProductAll'
import ProductApp from './components/portfolio/ProductApp'
import Product from './components/portfolio/Product'
import ProductBrand from './components/portfolio/ProductBrand'

import PortfolioDetailsPage from './pages/PortfolioDetailsPage'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} >
          <Route index element={<ProductAll />} />
          <Route path='/app' element={<ProductApp />} />
          <Route path='/product' element={<Product />} />
          <Route path='/brand' element={<ProductBrand />} />
        </Route>
        <Route path="/portfoliodetails/:id" element={<PortfolioDetailsPage />} />
      </Routes>
    </div>
  )
}
