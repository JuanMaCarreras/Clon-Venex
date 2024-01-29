import CreateProducts from './components/CreateProduct'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import HelpCenter from './components/HelpCenter.jsx'

function App () {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/create-products' element={<CreateProducts />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/centro-de-ayuda' element={<HelpCenter />} />
      </Routes>
    </>
  )
}

export default App
