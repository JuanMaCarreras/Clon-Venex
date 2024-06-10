import CreateProducts from './components/CreateProduct'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import ProductDetails from './components/ProductDetails'
import HelpCenter from './components/HelpCenter'
// import Footer from './components/Footer'
// import NavBar from './components/NavBar'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Auth from './components/Auth.jsx'

function App () {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/Auth' element={<Auth />} />

        <Route path='/create-products' element={<CreateProducts />} />
        <Route path='/products/:productId' element={<ProductDetails />} />
        <Route path='/centro-de-ayuda' element={<HelpCenter />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
