import CreateProducts from './components/CreateProduct'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import ProductDetails from './components/ProductDetails'
import HelpCenter from './components/HelpCenter'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

function App () {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/create-products' element={<CreateProducts />} />
        <Route path='/products/:productId' element={<ProductDetails />} />
        <Route path='/centro-de-ayuda' element={<HelpCenter />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
