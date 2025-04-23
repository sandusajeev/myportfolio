
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Componets/About'
import Contact from './Componets/Contact'

import Footer from './Componets/Footer'
import Header from './Componets/Header'
import PorfolioNav from './Componets/PorfolioNav'
import Projects from './Componets/Projects'
import Skills from './Componets/Skills'
import Home from './Pages/Home'

function App() {


  return (
    <>
<Header/>
<Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/skills" element={ <Skills/>}/>
      <Route path="/contact" element={ <Contact/>}/>
     </Routes>  
{/* <Home/>
<hr />
<About/>
<hr />
<Projects/>
<hr />
<Skills/>
<hr/>
<Contact/> */}
<hr/>
<PorfolioNav/>
<hr className="border-white" />
<Footer/>
    </>
  )
}

export default App
