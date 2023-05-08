import React from "react";
import {Link} from 'react-router-dom'

import "./Header.css"

import LogoSm from '../../../Asset/Logo Sm.png'

function Header(){
    

   const navBarToogle = () => {
        const nav = document.querySelector('ul')
    
        nav.classList.toggle('slide')
        
    
    }
    
     function navBarClose  ()  {
      const nav = document.querySelector('ul')
    
      nav.classList.remove('slide')
    }
    
    return(
        <nav className = "header-body">
                    
                <div className = 'header-title'>
                    <img src = {LogoSm} alt = 'Logo.png' />
                </div>
                
                <ul className = 'navbar' >
                    <li><Link onClick={navBarClose} className="link-name" to = "/">Home</Link></li>
                    <li><Link onClick={navBarClose} className="link-name" to = "/aboutus">About Us</Link></li>
                    <li><Link onClick={navBarClose} className="link-name" to = "/gallery">Gallery</Link></li>
                    <li><Link onClick={navBarClose} className="link-name" to = "/promo">Promo</Link></li>
                    <li><Link onClick={navBarClose} className="link-name" to = "/contactus">Contact Us</Link></li>
                    
                </ul>

                <div className = 'menu-toogle' onClick = {navBarToogle} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </nav>
    )
}

export default Header;