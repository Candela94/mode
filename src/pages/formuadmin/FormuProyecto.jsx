

import './formuadmin.css'
import { useState } from 'react'


const FormuProyecto = () => {

    const VITE_URL= import.meta.env.VITE_URL

    const [proyecto, setProyecto] = useState({

        nombre: '',
        portada: null,
        imagenes: []

    })


    const handleChange = (e) => {

        const { name, value, files } = e.target;

        if (name === 'portada') {
            setProyecto(prev => ({ ...prev, portada: files[0] }));
        } else if (name === 'imagenes') {
            setProyecto(prev => ({ ...prev, imagenes: Array.from(files) }));
        } else {
            setProyecto(prev => ({ ...prev, [name]: value }));
        }

    }


    const handleSubmit = async (e) => {
        e.preventDefault();

          // Validación antes de enviar
          if (!proyecto.nombre || !proyecto.portada || !proyecto.imagenes.length) {
            alert('Por favor, complete todos los campos');
            return;
        }


        try {

            const formData = new FormData();
            formData.append('nombre', proyecto.nombre);
            formData.append('portada', proyecto.portada);


          //Agregamos múltiples archivos 
          proyecto.imagenes.forEach(imagen => {
            formData.append('imagenes', imagen)
          })

               


                const token = localStorage.getItem('token');
                console.log("Token recuperado:", token); 

                console.log("Intentando subir proyecto con token...");

                const response = await fetch(`${VITE_URL}/api/v1/admin/proyectos`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    body: formData
                })

                const result = await response.json();
                if (response.ok) {
                    alert('Proyecto subido con éxito')
                    setProyecto({

                        nombre: '',

                        imagenes: [],

                        portada: null,


                    })

                    //reseteamos inputs de archivos
                    document.querySelector('input[name="portada"]').value='';
                    document.querySelector('input[name="imagenes"]').value='';


                } else {
                  alert('No se pudo subir')
                  console.error(result)
                }



            } catch (e) {

                console.error('Error al subir proyecto: ', e)
                alert("Error")



            }

        }
    return (

            <>

                <main className="Main-formu">
                    <h1 className="Main-titulo">Subir proyecto</h1>

                    <form onSubmit={handleSubmit} className="Formulario">


                        <div className="Formu-datos">
                            <input onChange={handleChange} value={proyecto.nombre}  name='nombre' className='Formulario-input' type="text" placeholder='Nombre del proyecto' />




                            <div className="Formulario-uploads">

                            <label className='Formulario-label'>
                            Portada del proyecto:
                            <input
                                name='portada'
                                type='file'
                                onChange={handleChange}
                                accept='image/*'
                            />
                        </label>

                                <label className='Formulario-label' htmlFor="Img-upload"> Selecciona una imagen
                                    <input name='imagenes' className='Formulario-input' id='Img-upload' type="file" multiple  accept='image/*'placeholder='Selecciona una imagen' onChange={handleChange}/>
                                </label>

                                <button type='submit' className='Boton'>Subir proyecto</button>
                               

                            </div>


                        </div>

                    </form>
                </main>

            </>

        );
    }

    export default FormuProyecto;