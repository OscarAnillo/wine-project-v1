/* Components */
import { NavComponent } from './Components/Nav-component'
import { HomeComponent } from './Components/HomeComponent'
import { Products } from './Components/Products'
import { Contact } from './Components/Contact'
import { Login } from './Components/Login'

/* React-router-dom */
import { Route, Routes } from 'react-router-dom'

import './App.css'

function App() {
  

  return (
    <div className='App'>
      <div className='container'>
        <NavComponent />
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
