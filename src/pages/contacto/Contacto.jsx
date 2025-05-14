
import { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import './contacto.css'


const Contacto = () => {

    const [showImage, setShowImage] = useState(false);
    const [showInfo, setShowInfo] = useState(false)

    const infoItems = [
        'c/Duque de Calabria,13, 46005, Valencia',
        'info@mode-studio.es',
        'Instagram'
    ]


    useEffect(() => {

        setTimeout(() => setShowImage(true), 200);
        setTimeout(() => setShowInfo(true), 1200)
    }, [])


    return (


        <>

            <Header />

            <main className="Contacto">

                <h1 className={`Contacto-h1 ${showInfo ? "fade-in" : ""}`}>Contacto</h1>


                <ul className="Contacto-ul">
                {infoItems.map((item, index) => (
                        <li
                            key={index}
                            className={`Contacto-li ${showInfo ? "slide-in" : ""}`}
                            style={{
                                transitionDelay: `${index * 0.5}s`
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <div className={`Contenedor-imag ${showImage ? "fade-in" : ""}`}>
                    <img src="/img/6.jpg" alt="img" className="Contacto-img" />
                </div>







            </main>


        </>


    );
}

export default Contacto;