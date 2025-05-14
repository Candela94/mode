
import { NavLink } from "react-router";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import './header.css'
import { useState } from "react";
import { TfiClose } from "react-icons/tfi";

export const Header = () => {


    const [open, setIsOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const openMenu = () => {

        setIsOpen(true);
        setIsClosing(false);
        setTimeout(() => {
            setIsActive(true);
        }, 300);


    }




    const closeMenu = () => {
        setIsClosing(true);
        setIsActive(false);

        setTimeout(() => {
            setIsOpen(false);
        }, 300); // duración igual a la animación CSS
    };


    return ( 

        <>
        
        <header className="Header">
            <nav className="Header-nav">
                <ul className="Header-ul">


                   <div className="Logo-container">
                    <NavLink className='Header-logo'to="/home"><img src="/img/mode-logo.png" alt="Logo" className="Header-logo" /></NavLink>
                    </div>


                    <div className="spacer"></div>
                   <li className="Header-li menu" onClick={openMenu}><p>MENU</p></li>

                    
                </ul>
            </nav>
        </header>



        {
            open && (


                <div onClick={closeMenu}className={`overlayMenu ${isActive ? 'active' : isClosing ? 'close' : ''}`} >
                    <div className={`overlayContent ${isActive ? 'active' : isClosing ? 'close' : ''}`}>
                        <div className="closeButton" onClick={closeMenu}><TfiClose /></div>
                        <div className="overlayLinks">
                        <NavLink to='/proyectos' onClick={closeMenu}>Proyectos</NavLink>
                        <NavLink to='' onClick={closeMenu}>En proceso</NavLink>
                        <NavLink to='/contacto' onClick={closeMenu}>Contacto</NavLink>
                        </div>

                    </div>
                </div>

            )
        }
        
        </>
     );
}