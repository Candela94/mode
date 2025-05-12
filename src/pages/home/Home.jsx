
import { Header } from "../../components/header/Header";
import './home.css'

import { useScroll } from "../../../hooks/UseScroll";
import { useState } from "react";
import { useFetchAll } from "../../../hooks/useFetch";




const Home = () => {


    const {proyectos ,loading, error} = useFetchAll()
    const ref = useScroll();





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

                                            <li ref={ref} key={proyecto._id} className="Galeria-li ">
                                                <img  src={proyecto.portada} index={id} alt={proyecto.nombre} className="Galeria-img reveal" />
                                            </li>
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