


import { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import './lightbox.css'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";


export const Lightbox = ({ images, currentId, isOpen, closeLightbox, nextImage, prevImage }) => {



    if (!isOpen) return null;

    return (
        <div className="lightbox-overlay" onClick={closeLightbox}>

            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>

                <button className="lightbox-close" onClick={closeLightbox}><TfiClose /></button>

                <img src={images[currentId]} alt={`Image ${currentId}`} className="lightbox-img" />

                <div className="lightbox-controls">
                    <button className="lightbox-prev" onClick={prevImage}><GrPrevious /></button>
                    <button className="lightbox-next" onClick={nextImage}><GrNext /></button>
                </div>
            </div>
        </div>
    );



}