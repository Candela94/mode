

import { CardProyectos } from "../components/Cards-proyectos";




const Proyectos = () => {

    const listaProyectos = [
        {
            nombre: "Bajo",
            img: "/public/imgs/bajo/1.jpg"
        },

        {
            nombre: "Reina",
            img: "/public/imgs/reina/05-REINA-MODE-WEB.jpg"
        },


        {
            nombre: "Viveros",
            img: "/public/imgs/web/01-CS-Viveros.jpg"
        },
    ]

    return (
        <>

            <main className="Main-proyectos">


                <div className="Proyecto">
                    {listaProyectos.map((proyecto, index,) => (

                        <div className="Proyecto-contenedor" key={index}>

                            <div className="Proyecto-informacion" >
                                <h3 className="Proyecto-titulo">{proyecto.nombre}</h3>
                             
                        
                            </div>

                            <CardProyectos img = {proyecto.img} />
                        </div>
                    ))}
                </div>







            </main>

        </>
    )

}


export default Proyectos