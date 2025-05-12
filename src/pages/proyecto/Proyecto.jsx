import { useFetchOne } from "../../../hooks/useFetch";
import './proyecto.css'



const Proyecto = () => {

    const {proyect,imagenes, load, err} = useFetchOne()

    return (  
        <>


        <h1>{proyect.nombre}</h1>

        <div className="Galeria">

            {

                load? (
                    <p>Cargando imágenes</p>


                ) : err ? (

                    <p>Error al cargar imágenes </p>

                ) : Array.isArray(imagenes) && imagenes.length > 0 ? (

                        <ul className="Galeria-imagenes">


                            {
                                imagenes.map((imgUrl,id) => {
                                    return(

                                        <li className="Galeria-li" key={imgUrl._id || id}><img src={imgUrl} alt= {`Imagen ${id}`} className="Galeria-imgProyecto" /></li>
                                    )
                                })
                            }

                        </ul>
                    
                ) : (
                    <p>No hay imágenes que mostrar</p>
                )
            }

        </div>


        </>
    );
}
 
export default Proyecto;