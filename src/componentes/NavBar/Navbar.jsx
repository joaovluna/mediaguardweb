import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo_index.png'
import { Link, ScrollLink } from 'react-scroll';

const Navbar = () => {

  const [mov, setMov] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=> {
      window.scrollY > 50 ? setMov(true) : setMov(false);
    })
  },[]);

  return (
    <nav className={`container ${mov? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Início</Link></li>
            <li><Link to='about' smooth={true} offset={0} duration={500}>Sobre</Link></li>
            <li><Link to='premium' smooth={true} offset={0} duration={500}>Premium</Link></li>
            <li><Link to='contact' smooth={true} offset={0} duration={500}>Contate-nos</Link></li>
            <li><button className='btn'><strong>Cadastre-se</strong></button></li>
            <li>Login</li>
        </ul>
    </nav>
  )
}

export default Navbar
