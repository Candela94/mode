
import { Header } from "../../components/header/Header";
import './home.css'

import { useScroll } from "../../../hooks/UseScroll";
import { useState } from "react";
import { useFetchAll } from "../../../hooks/useFetch";
import { NavLink } from "react-router-dom";




const Home = () => {


    const {proyectos ,loading, error} = useFetchAll()







    return (
        <>
            <Header />


            <main className="Main">


                <div className="Galeria">
                  


                    {
                        loading ? (

                            <p> Cargando proyectos</p>

                        ) : error ? (

                            <p>Error al cargar los proyectos</p>

                        ) : proyectos && proyectos.length > 0 ? (

                            <ul className="Galeria-proyectos">


                                {
                                    proyectos.map((proyecto, id) => {

                                        return(

                                           <NavLink key={proyecto._id}  to={`/proyectos/${proyecto._id}`}><li  data-index={id} className="Galeria-li ">
                                               <div  className="Galeria-contenedor " >
                                                <img  src={proyecto.portada}  alt={proyecto.nombre} className="Galeria-img " />
                                                </div>
                                            </li></NavLink> 
                                        )
                                    })
                                }

                            </ul>
                        ): (
                            <p>No hay proyectos que mostrar</p>
                        )
                    }





                </div>



            </main>


        </>
    );
}

export default Home;