import { useState, useEffect } from 'react'

/* Components */
import { NavComponent } from './Components/Nav-component'
import { HomeComponent } from './Components/HomeComponent'
import { Products } from './Components/Products'
import { SingleProduct } from './Components/Single-product'
import { Contact } from './Components/Contact'
import { Login } from './Components/Login'

/* React-router-dom */
import { Route, Routes, useMatch } from 'react-router-dom'

import data from './Data/products.json'

import './App.css'

function App() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    if(openMobileMenu){
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [openMobileMenu])

  const match = useMatch("/products/:name");
  const product = match ? data.find((product) => product.name === match.params.name)
  : null;

  return (
    <div className='App'>
      
        <NavComponent openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu}/>
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:name' element={<SingleProduct product={product} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      
    </div>
  )
}

export default App
