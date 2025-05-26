

import { NavLink } from "react-router";
import { Header } from "../../components/header/Header";
import './inicio.css'

import { BsChevronRight } from "react-icons/bs";




const Inicio = () => {


    return (
        <>


            <main className="Main-inicio">

                
                    <img src="/img/H1.jpg" alt="portada" className="Main-img" />
           


                <div className="Main-texto">

                    <img src="/img/mode-logo.png" alt="logo" className="Logo" />
                    <NavLink to='/home'><BsChevronRight className="Icono"/></NavLink>


                </div>


            </main>



        </>

    );
}

export default Inicio;