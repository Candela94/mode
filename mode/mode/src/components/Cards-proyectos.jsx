
import { Button } from "./Buttons"




export const CardProyectos = ({nombre, img}) => {




    return (


        <>
        <div className="Card">
        <img src={img} alt="proyecto" className="Card-img" />

        <div className="Card-informacion">
            <h4>{nombre}</h4>
            <Button></Button>
        </div>
        </div>
        
        </>


    )


}