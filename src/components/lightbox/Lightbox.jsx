


import { useState, useEffect } from "react";

import './lightbox.css'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";


export const Lightbox = ({ images, currentId, isOpen, closeLightbox, nextImage, prevImage }) => {


    const [visible, setVisible] = useState(isOpen);
    const [closing, setClosing] = useState(false);
    const [imgVisible, setImgVisible] = useState(true);


    // Cuando isOpen cambia a true, mostrar el lightbox

    useEffect(() => {

        if (isOpen) setVisible(true);

    }, [isOpen]);

    // Manejo del cierre con animación

    const handleClose = () => {

        setClosing(true);

        setTimeout(() => {
            setClosing(false);
            setVisible(false);
            closeLightbox();


        }, 200); // Debe coincidir con la duración del fadeOut
    };



    //manejo de teclas 
    useEffect(() => {
        const handleKeyDown = (e) => {

            if (e.key === 'Escape') {

                handleClose(); // Cerrar con Escape

            } else if (e.key === 'ArrowLeft') {

                changeImage(prevImage);

            } else if (e.key === 'ArrowRight') {

                changeImage(nextImage);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {

            document.removeEventListener('keydown', handleKeyDown);

        };
    }, [prevImage, nextImage]);






    //visibilidad 
    const changeImage = (changeFn) => {
        setImgVisible(false); // Oculta actual



        const img = document.querySelector('.lightbox-img');
        img.classList.add('zoom');


        setTimeout(() => {
          changeFn(); // Cambia la imagen
          setImgVisible(true); // Muestra la nueva
        }, 300); // Tiempo breve para el cambio




        setTimeout(() => {
            img.classList.remove('zoom');
          }, 500);

      };




    if (!visible) return null;

    return (
        <div className={`lightbox-overlay ${closing ? 'closing' : ''}`} onClick={handleClose}>

            <div className={`lightbox-content ${closing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>

                {/* <button className="lightbox-close" onClick={handleClose}><TfiClose /></button> */}

                <img src={images[currentId]} alt={`Image ${currentId}`} className={`lightbox-img ${imgVisible ? 'visible' : ''}`} />

                {/* <div className="lightbox-controls">
                    <button className="lightbox-prev" onClick={() => changeImage(prevImage)}><GrPrevious /></button>
                    <button className="lightbox-next" onClick={() => changeImage(nextImage)}><GrNext /></button>
                </div> */}
            </div>
        </div>
    );



}