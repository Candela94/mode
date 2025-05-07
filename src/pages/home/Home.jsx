
import { Header } from "../../components/header/Header";
import './home.css'

import { useScroll } from "../../../hooks/UseScroll";
import { useState } from "react";

const Home = () => {

    const imageRefs = Array(5).fill(null).map(() => useScroll());



    return (
        <>
            <Header />


            <main className="Main">


                <div className="Galeria">
                    {[1, 2, 3, 4, 5].map((num, index) => (

                        <div  ref={imageRefs[index]} className="Contenedor-imagen reveal">
                            <img
                                key={num}
                               
                                src={`/img/${num}.jpg`}
                                alt={`proyecto ${num}`}
                                className="Galeria-img "
                                data-index={index} // usamos esto para aplicar delay en CSS
                            />
                        </div>
                    ))}
                </div>



            </main>


        </>
    );
}

export default Home;