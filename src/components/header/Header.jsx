
import { NavLink } from "react-router";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import './header.css'

export const Header = () => {
    return ( 

        <>
        
        <header className="Header">
            <nav className="Header-nav">
                <ul className="Header-ul">

                    <NavLink className='Logo'to=""><img src="/img/mode-logo.png" alt="Logo" className="Header-logo" /></NavLink>
                    <NavLink className='Logo'to="/menu"><li className="Header-li"><HiOutlineMenuAlt1 className="Header-menu" /></li></NavLink>
                    
                </ul>
            </nav>
        </header>
        
        </>
     );
}