import '../../css/Layout.css'
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

                <div className="Main-container">
                    <div className="Main-background">
                        {imagenes.map((src, index) => (
                            <div className="Background-imagenes" key={index} style={{
                                backgroundImage: `url(${src})`, animationDelay: `${index * 15}s`
                            }}></div>
                        ))}
                    </div>

                    <div className="Main-comming">

                        <img src="/img/mode-logo.png" alt="logo" className="Main-logo" />
                        <p className='Subtitle'>Coming soon</p>

                    </div>


                </div>

            </main>

        </>
    );
}

export default CoomingSoon;