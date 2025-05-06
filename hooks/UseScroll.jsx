
import { useEffect, useRef } from "react"



export const useScroll = () => {

    const ref = useRef()



    useEffect((className = 'reveal') => {

        const observer = new IntersectionObserver(([entry]) => {


            const el = entry.target;
            if (entry.isIntersecting) {

                const index = el.dataset.index || 0; // usa el data-index
                el.style.transitionDelay = `${index * 0.2}s`; // aplica delay dinámico
                el.classList.add('visible');
            } else {
                el.classList.remove('visible')
            }


        },
            { threshold: 0.1 }


        );


        if (ref.current) observer.observe(ref.current); //si hay un elemento vinculado, comienza a observarlo

        return () => {
            if (ref.current) observer.unobserve(ref.current)
        };



    }, [])


    return ref;



}