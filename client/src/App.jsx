import CreateProducts from './components/CreateProduct'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import ProductDetails from './components/ProductDetails.jsx'

function App () {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/create_products' element={<CreateProducts />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default App
