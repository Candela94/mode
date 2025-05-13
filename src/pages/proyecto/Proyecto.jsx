import { useFetchOne } from "../../../hooks/useFetch";
import './proyecto.css'
import { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import { Lightbox } from "../../components/lightbox/Lightbox";



const Proyecto = () => {

    const { proyect, imagenes, load, err } = useFetchOne()
    const [orientaciones, setOrientaciones] = useState([])

    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [currentId, setCurrentId] = useState(0)


    //Función para abrir el lightbox
    const openLightbox = (index) => {

        setCurrentId(index); //id de la imagen seleccionada
        setLightboxOpen(true)
    }



    //cerrar lightbox
    const closeLightbox = () => {

        setLightboxOpen(false)

    }


    //sig imagen 
    const nextImage = () => {

        setCurrentId((prevIndex) => (prevIndex + 1) % imagenes.length);

    };


    //ant imagen 
    const prevImage = () => {

        setCurrentId((prevIndex) => (prevIndex - 1 + imagenes.length) % imagenes.length);

    };





    useEffect(() => {
        const detectarOrientaciones = async () => {

            const resultados = await Promise.all(
                imagenes.map((src) => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.src = src;
                        img.onload = () => {

                            resolve(img.naturalWidth > img.naturalHeight ? 'horizontal' : 'vertical')
                        }

                        img.onerror = () => resolve('');
                    })
                })

            )

            setOrientaciones(resultados)
        }

        if (imagenes && imagenes.length > 0) {

            detectarOrientaciones()
        }
    }, [imagenes])




    return (
        <>



            <Header />

            <main className="Main-proyecto">
                <h1>{proyect.nombre}</h1>
                <div className="Galeria-proyecto">

                    {

                        load ? (
                            <p>Cargando imágenes</p>


                        ) : err ? (

                            <p>Error al cargar imágenes </p>

                        ) : Array.isArray(imagenes) && imagenes.length > 0 ? (

                            <ul className="Galeria-mansory">


                                {
                                    imagenes.map((imgUrl, id) => {

                                        const claseExtra = orientaciones[id] === 'horizontal' ? 'horizontal' : '';
                                        return (

                                            <li onClick={() => openLightbox(id)} className={`Galeria-mansory-item ${claseExtra}`} key={imgUrl._id || id}><img src={imgUrl} alt={`Imagen ${id}`} className="Galeria-imgProyecto" /></li>
                                        )
                                    })
                                }

                            </ul>

                        ) : (
                            <p>No hay imágenes que mostrar</p>
                        )
                    }

                </div>
            </main>


                    <Lightbox 
                    
                    images = {imagenes}
                    currentId={currentId}
                    isOpen={lightboxOpen}
                    closeLightbox={closeLightbox}
                    nextImage={nextImage}
                    prevImage={prevImage}
                    
                    />
        </>
    );
}

export default Proyecto;