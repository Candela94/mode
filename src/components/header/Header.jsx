
import { NavLink } from "react-router";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import './header.css'

export const Header = () => {
    return ( 

        <>
        
        <header className="Header">
            <nav className="Header-nav">
                <ul className="Header-ul">

                    <NavLink className='Header-logo'to="/"><img src="/img/mode-logo.png" alt="Logo" className="Header-logo" /></NavLink>
                    <NavLink className='Header-iocono'to="/menu"><li className="Header-li"><p>MENU</p></li></NavLink>
                    
                </ul>
            </nav>
        </header>
        
        </>
     );
}