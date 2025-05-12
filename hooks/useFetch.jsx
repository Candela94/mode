

import { useState, useEffect } from "react";
import { useParams } from "react-router";
//Obtener todos los proyectos

export const useFetchAll =  () => {



    const VITE_URL = import.meta.env.VITE_URL
    console.log(import.meta.env.VITE_URL); 

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [proyectos, setProyectos] = useState([])


const obtenerProyectos = async () => {
    try{

        const response = await fetch(`${VITE_URL}/api/v1/proyectos`, {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                
            }, 
            
        });


        if(!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json();
      

        
        setProyectos(data.data || [])




    }catch(e) {
        console.error('Error al obtener proyectos', e);
        setError(e.message);

    }finally {
        setLoading(false)
        
    }

    
}
useEffect(() => {
    obtenerProyectos()
},[])

    return {proyectos, error, loading};
}




export const useFetchOne = () => {

    const VITE_URL = import.meta.env.VITE_URL
    const [load, setLoad] = useState(true);
    const { pid } = useParams()
    const [err, setErr] = useState(null);

    const [proyect, setProyect] = useState('')
    const [imagenes, setImagenes] = useState([])


    useEffect(() => {
        // Verifica que pid no sea null o vacío
        if (!pid) {
            setErr('El ID del proyecto es inválido.');
            setLoad(false);
            return;
        }


        const proyectoId = async () => {


            try{


                const response = await fetch(`${VITE_URL}/api/v1/proyectos/${pid}`, {
                        
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                      
                    },


                    

                })

                if(!response.ok) {
                    throw new Error(`Error: ${response.status}`)
                }
    
                const data = await response.json();
                console.log('DATA RECIBIDA:', data); // 👈

                setProyect(data.data)
                setImagenes(data.data.imagenes)

            }catch(e) {

            }finally {
                setLoad(false); 
              }

        }

        proyectoId()



    }, [pid, VITE_URL]);
   

    return {proyect,imagenes, load, err};
}