

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
    const [anteriorIndice, setAnteriorIndice] = useState(null);
    const [primeraVez, setPrimeraVez] = useState(true)

    useEffect(() => {


        const intervalo = setInterval(() => {

            setPrimeraVez(false);
            setAnteriorIndice(indice);
            setIndice((prev) => (prev + 1) % imagenes.length);

        }, 10000);

        return () => clearInterval(intervalo)



    }, [indice])




    return (
        <>


            <main className="Main-inicio">

                {anteriorIndice !== null && (
                    <img
                        src={imagenes[anteriorIndice]}
                        alt={`anterior-${anteriorIndice}`}
                        className="Main-img fade-out"
                    />
                )}

                <img
                    src={imagenes[indice]}
                    alt={`imagen-${indice}`}
                    className={`Main-img ${primeraVez ? 'slideDown' : 'fade-in'}`}
                />

                <div className="Main-texto">

                    <img src="/img/mode-logo.png" alt="logo" className="Logo" />
                    <NavLink to='/home'><BsChevronRight className="Icono" /></NavLink>


                </div>


            </main>



        </>

    );
}

export default Inicio;