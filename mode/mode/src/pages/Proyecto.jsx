


const Proyecto = () => {

    const listaImages =[
        "https://dummyjson.com/image/400x200/008080/ffffff?text=Image1",
        "https://dummyjson.com/image/400x200/008080/ffffff?text=Image2",
        "https://dummyjson.com/image/400x200/008080/ffffff?text=Image3",
    ]


    return (


        <>
        <main className="Main">
        
        <div className="Contenedor-imagenes">

            {listaImages.map((imagen) => (

                <img src={listaImage} alt="" />

            ))

            }

        </div>

        </main>
        
        </>
    )


}




export default Proyecto