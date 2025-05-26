

import { NavLink } from "react-router";
import { Header } from "../../components/header/Header";
import './inicio.css'

import { BsChevronRight } from "react-icons/bs";

const imagenes = [
    'img/H1.jpg',
    'img/H2.jpg',
    'img/H3.jpg',
    'img/H4.jpg',
]


const Inicio = () => {


    return (
        <>


            <main className="Main-inicio">

                {
                    imagenes.map((src,index) => (
                        <div className="Main-img" key={index} style={{
                            backgroundImage:`url(${src})`,
                            animationDelay:`${index*15}s`
                        }}></div>
                    ))
                }
                 
           


                <div className="Main-texto">

                    <img src="/img/mode-logo.png" alt="logo" className="Logo" />
                    <NavLink to='/home'><BsChevronRight className="Icono"/></NavLink>


                </div>


            </main>



        </>

    );
}

export default Inicio;