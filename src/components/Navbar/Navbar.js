import React, {useState} from 'react'
import './Navbar.scss'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='navbar'>
        <div className="navbar__logo">MARTIN GREEN</div>
        <div className={`navbar__items ${isOpen && "open"}`}>
            <a href="#">INICIO</a>
            <a href="#">CONTACTO</a>
            <a href="#">BLOG</a>
            <a href="#">NOSOTROS</a>
        </div>
        <div className={`navbar__toggle ${isOpen && "open"}`} onClick={ ()=> setIsOpen(!isOpen) }>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}
