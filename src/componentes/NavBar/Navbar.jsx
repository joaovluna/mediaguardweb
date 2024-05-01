import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo_index.png'
import menu_icon from '../../assets/icons8-menu.svg'
import { Link, ScrollLink } from 'react-scroll';

const Navbar = () => {

  const [mov, setMov] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=> {
      window.scrollY > 50 ? setMov(true) : setMov(false);
    })
  },[]);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const [mobileMenu,setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${mov? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li className={activeIndex === 0 ? 'active' : ''}><Link to='hero' smooth={true} offset={0} duration={500} onClick={() => handleClick(0)}>Início</Link></li>
            <li className={activeIndex === 1 ? 'active' : ''}><Link to='about' smooth={true} offset={-260} duration={500} onClick={() => handleClick(1)}>Sobre</Link></li>
            <li className={activeIndex === 2 ? 'active' : ''}><Link to='premium' smooth={true} offset={-360} duration={500} onClick={() => handleClick(2)}>Premium</Link></li>
            <li className={activeIndex === 3 ? 'active' : ''}><Link to='contact' smooth={true} offset={0} duration={500} onClick={() => handleClick(3)}>Contate-nos</Link></li>
            <li className='login'>Login</li>
            <li><button className='btn'><strong>Cadastre-se</strong></button></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon'onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
