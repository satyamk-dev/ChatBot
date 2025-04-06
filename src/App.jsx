import React from 'react'
import { Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import AITS from './pages/AITS'
import Contact from './pages/contact'
import ErrorPage from './pages/ErrorPage';
import AIPage from './pages/AIPage';
import Footer from './components/Footer';




function App() {
  return (
    <>

      <div className=' bg-neutral-800 w-full h-screen'>

        <Header />
        {/* ******************************* Page Routing ***************************** */}
        <Routes>
          <Route path='*' element={<ErrorPage />} />

          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/aits' element={<AITS />} />
          <Route path='/aipage' element={<AIPage />} />

        </Routes>


        <Footer />

      </div>


    </>
  )
}

export default App