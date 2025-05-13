

import { NavLink } from "react-router";
import { Header } from "../../components/header/Header";
import './inicio.css'
import { BsChevronRight } from "react-icons/bs";



const Inicio = () => {


    return (
        <>


            <main className="Main-inicio">

                <picture>
                    <source srcSet="/img/H1.jpg" media="(min-width: 768px)" />
                    <img src="/img/1.jpg" alt="portada" className="Main-img" />
                </picture>


                <div className="Main-comming">

                    <img src="/img/mode-logo.png" alt="logo" className="Main-logo" />
                    <p className='Subtitle'>Coming soon</p>

                </div>


            </main>



        </>

    );
}

export default Inicio;