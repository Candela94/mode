
import { Header } from "../../components/header/Header";
import './home.css'

import { useScroll } from "../../../hooks/UseScroll";
import { useEffect, useRef, useState } from "react";
import { useFetchAll } from "../../../hooks/useFetch";
import { NavLink } from "react-router-dom";




const Home = () => {

    const galeriaRef = useRef(null)

    const { proyectos, loading, error } = useFetchAll()


useEffect(() => {
    const galeria = galeriaRef.current;

    if(!galeria) return;

    const handleWheel = (e) => {

        if(window.innerWidth >= 1025) {

            e.preventDefault(); //evitamos scroll vertical 
            galeria.scrollLeft += e.deltaY; //mueve horizontalmente
        }
    };

    galeria.addEventListener("wheel", handleWheel, {passive:false})

    return () => {
        galeria.removeEventListener("wheel", handleWheel)
    }
},[])




    return (
        <>
            <Header />


            <main className="Main">


                <div className="Galeria" ref={galeriaRef}>


                    {
                        loading ? (

                            <p className="cargando"> Cargando proyectos ...</p>

                        ) : error ? (

                            <p>Error al cargar los proyectos</p>

                        ) : proyectos && proyectos.length > 0 ? (

                            <ul className="Galeria-proyectos">

                       


                                {
                                    proyectos.map((proyecto, id) => {

                                        return (

                                            <NavLink key={proyecto._id} to={`/proyectos/${proyecto._id}`}><li data-index={id} className="Galeria-li ">
                                                <div className="Galeria-contenedor " >
                                                    <div className="Galeria-nombre">{proyecto.nombre}</div>
                                                    <img src={proyecto.portada} alt={proyecto.nombre} className="Galeria-img " />
                                                </div>
                                            </li></NavLink>
                                        )
                                    })
                                }

                            </ul>
                        ) : (
                            <p>No hay proyectos que mostrar</p>
                        )
                    }





                </div>



            </main>


        </>
    );
}

export default Home;