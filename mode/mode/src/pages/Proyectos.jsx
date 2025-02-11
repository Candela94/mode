

import { CardProyectos } from "../components/Cards-proyectos";



const Proyectos = () => {

    const listaProyectos = [
        {nombre:"Bajo",
        img:"/public/imgs/bajo/1.jpg"
        },

        {nombre:"Reina",
        img:"/public/imgs/reina/05-REINA-MODE-WEB.jpg"
        },


        {nombre:"Viveros",
        img:"/public/imgs/web/01-CS-Viveros.jpg"
        },
    ]

return(
    <>
    
    <main className= "Main-proyectos">


            <ul className="Main-ul">


    {
        listaProyectos.map((proyecto,id) => (
            <li key={id}><CardProyectos  img={proyecto.img} nombre = {proyecto.nombre} /></li>
        ))
    }

            </ul>



    </main>
    
    </>
)

}


export default Proyectos