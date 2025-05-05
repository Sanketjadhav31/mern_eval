import React from 'react'
import './App.css'
import { items } from './models/product.js'
import ProductDetails from './routes/productDetails.jsx'

const App = () => {
  return (
    <div>
      <h1>Product List</h1>
      <h1>{items}</h1>
      <h1>Product Details</h1>
      <ProductDetails/>
    </div>
  )
}

export default App
