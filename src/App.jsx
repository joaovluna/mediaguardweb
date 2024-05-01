import React from 'react'
import Navbar from './componentes/NavBar/Navbar'
import Hero from './componentes/Hero/Hero'
import Premium from './componentes/Premium/Premium'
import Title from './componentes/Title/Title'
import About from './componentes/About/About'
import Contact from './componentes/Contact/Contact'
import Footer from './componentes/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle="Nossos Planos" title="O que oferecemos"/>
        <Premium/>
        <About/>
        <Title subTitle="CONTATE-NOS" title="Entrar em contato"/>
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
