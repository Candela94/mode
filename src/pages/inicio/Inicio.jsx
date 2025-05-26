

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
    const [transicionando, setTransicionando] = useState(false);

    useEffect(() => {


        const intervalo = setInterval(() => {

            if (primeraVez) {
                setPrimeraVez(false);
            } else {
                setTransicionando(true);
                setAnteriorIndice(indice);
                
                // Pequeño delay para asegurar que la imagen anterior se muestre
                setTimeout(() => {
                    setIndice((prev) => (prev + 1) % imagenes.length);
                }, 50);
                
                // Limpiar la imagen anterior después de la transición
                setTimeout(() => {
                    setAnteriorIndice(null);
                    setTransicionando(false);
                }, 1500); // 1.5s para que coincida con la duración de la transición
            }

        }, 10000);

        return () => clearInterval(intervalo)



    }, [indice, primeraVez])




    return (
        <>


            <main className="Main-inicio">

                {anteriorIndice !== null && transicionando && (
                    <img
                        src={imagenes[anteriorIndice]}
                        alt={`anterior-${anteriorIndice}`}
                        className="Main-img imagen-anterior"
                    />
                )}

                <img
                    src={imagenes[indice]}
                    alt={`imagen-${indice}`}
                    className={`Main-img ${primeraVez ? 'slideDown' : 'imagen-actual'}`}
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