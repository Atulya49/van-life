import React from 'react'
import { BrowserRouter, Routes,Route, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
const App = () => {
  return (
    <BrowserRouter>
    <header>
      <Link className='site-logo' to='/'> #VANLIFE</Link>
      <nav>
        <Link  className='nav-about'to="/about"> About</Link>
      </nav>
    </header>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about'element={<About/>}/>
           </Routes> 
    </BrowserRouter>
  )
}

export default App
