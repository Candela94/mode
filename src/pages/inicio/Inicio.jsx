

import { NavLink } from "react-router";
import { Header } from "../../components/header/Header";
import './inicio.css'

import { BsChevronRight } from "react-icons/bs";
import { useEffect, useState } from "react";


const imagenes = [

    '/img/H1.jpg',
    '/img/H2.jpg',
    '/img/H3.jpg',
    '/img/H4.jpg'


]



const Inicio = () => {

    const [indice, setIndice] = useState(0)
    const [primeraVez, setPrimeraVez] = useState(true)
   

    useEffect(() => {


        const intervalo = setInterval(() => {
            if (primeraVez) {
                setPrimeraVez(false);
            }
            setIndice((prev) => (prev + 1) % imagenes.length);
        }, 10000);

        return () => clearInterval(intervalo);



    }, [])




    return (
        <>


            <main className="Main-inicio">

            {imagenes.map((imagen, i) => (
                    <img
                        key={i}
                        src={imagen}
                        alt={`imagen-${i}`}
                        className={`Main-img ${
                            i === indice 
                                ? (primeraVez && i === 0 ? 'slideDown' : 'active') 
                                : 'inactive'
                        }`}
                    />
                ))}
                <div className="Main-texto">

                    <img src="/img/mode-logo.png" alt="logo" className="Logo" />
                    <NavLink to='/home'><BsChevronRight className="Icono" /></NavLink>


                </div>


            </main>



        </>

    );
}

export default Inicio;