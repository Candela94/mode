import '../../css/App.css'
import './comming.css'



const imagenes = [

    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg'

]

const CoomingSoon = () => {


    return (

        <>

            <main className="Main Main-commingSoon">


                <di className="Main-background">
                    {imagenes.map((src,index) => (
                        <div className="Background-imagenes" key={index} style={{
                            backgroundImage:`url(${src})`, animationDelay:`${index * 15}s`
                        }}></div>
                    ))}
                </di>

                <div className="Main-comming">

                    <h1 className='Title'>MODE</h1>
                    <p className='Subtitle'>Comming soon</p>

                </div>




            </main>

        </>
    );
}

export default CoomingSoon;