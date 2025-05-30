

import { NavLink } from "react-router";
import { Header } from "../../components/header/Header";
import './inicio.css'

import { BsChevronRight } from "react-icons/bs";
import { useEffect, useState } from "react";


const imagenes = [

    '/img/H1.jpg',
    '/img/H2.jpg',
    '/img/H3.jpg',
    '/img/H4.jpg',
    '/img/H5.jpg',
    '/img/H6.jpg'


]



const Inicio = () => {

    const [indice, setIndice] = useState(0)
    const [primeraAnimacion, setPrimeraAnimacion] = useState(true)


    // useEffect(() => {
    //     // Marcar cuando la animación slideDown ha terminado
    //     const timer = setTimeout(() => {
    //         setAnimacionCompleta(true);
    //     }, 3000); // Duración de slideDown

    //     return () => clearTimeout(timer);
    // }, []);



    // useEffect(() => {


    //     const intervalo = setInterval(() => {
    //         if (primeraVez) {
    //             setPrimeraVez(false);
    //         }
    //         setIndice((prev) => (prev + 1) % imagenes.length);
    //     }, 10000);

    //     return () => clearInterval(intervalo);



    // }, [primeraVez])




    useEffect(() => {
        let intervalo;
        
        if (primeraAnimacion) {
            // Esperar a que termine la primera animación (slideDown) antes de iniciar el ciclo
            const timeout = setTimeout(() => {
                setPrimeraAnimacion(false);
                setIndice(1); // Cambiar a la segunda imagen
                
                // Iniciar el intervalo normal después del primer cambio
                intervalo = setInterval(() => {
                    setIndice((prev) => (prev + 1) % imagenes.length);
                }, 10000);
            }, 8000); // 3s slideDown + 5s pausa
            
            return () => {
                clearTimeout(timeout);
                if (intervalo) clearInterval(intervalo);
            };
        } else {
            // Intervalo normal para el resto de imágenes
            intervalo = setInterval(() => {
                setIndice((prev) => (prev + 1) % imagenes.length);
            }, 10000);
            
            return () => clearInterval(intervalo);
        }
    }, [primeraAnimacion]);





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
                      } ${
                          // Solo aplicar transición después de que termine slideDown
                          (i === 0 && !animacionCompleta) ? 'no-transition' : ''
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