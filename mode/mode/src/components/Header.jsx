
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MenuDesplegable } from "./MenuDesplegable";

export const Header = () => {

    const [menu, setMenu] = useState(false)


    const handleOpenMenu = () => {

        setMenu(!menu)


    }


    return(
        <>
        <header className="Header">
            <img src="#" alt="logo" className="Logo" />
            <nav className="Header-nav">

            <HiMenuAlt3 onClick= {handleOpenMenu} style={{width:'24px', height:'24'}}/>   

            {menu && (
                <MenuDesplegable />
            ) }


            </nav>
        </header>
        
        </>
    )
}