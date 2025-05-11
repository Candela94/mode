
import './registro.css'
import { Button } from '../../components/buttons/Button.jsx';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext.jsx'

import { NavLink, useNavigate } from 'react-router';




const Registro = () => {

   
    const VITE_URL = import.meta.env.VITE_URL
    
    const navigate = useNavigate();
    const {LogIn} = useContext(UserContext)
   

    const [formData, setFormData] = useState({

     
        email: "",
        password: "",
        repeatPassword: "",
      

    })

    


    const handleChange = async (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}))
    }



   


    const handleEnviar = async (e) => {
        e.preventDefault();


        //Validar todos los campos
        if (Object.values(formData).some((value) => value.trim() ==='')) {
            alert("Todos los campos son obligatorios")
        }
        
        //validar contraseña 
        if(formData.password.trim() !==formData.repeatPassword.trim()) {
            alert('Las contraseñas no coinciden')
            return;
        }

    
        try {
            const response = await fetch(`${VITE_URL}/api/v1/usuarios/register`, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json();
            console.log('Response:' ,response)
            console.log('Data:' , data)
    
            if (response.ok) {


             
               localStorage.setItem("token", data.token)
                LogIn({
                   
                    email: data.user.email

                });
                navigate('/admin/uploads')
            

            } else {
               
            }
        } catch (e) {
            console.error('Error al registrarse', e);
          
        }

    }    






    
   





    return (
        <>
            
                <main className="Main-login">
                    <div className="Notificacion-container">
                        <Notificaciones />
                    </div>
                    <form action="POST" onSubmit={handleEnviar} className="Formulario">

                        <h1 className='Formulario-h1'>Registro</h1>

                      
                        <input onChange={handleChange} value={formData.email} type="email" name='email' className="Formulario-mail Formulario-input" placeholder="email" />

                     
                        <input onChange={handleChange} value={formData.password}  name='password'type="password" className="Formulario-input" placeholder="Contraseña" />

                        <input onChange={handleChange} value={formData.repeatPassword}  name='repeatPassword'type="password" className=" Formulario-input" placeholder="Repite la contraseña" />

                        <div className="Formulario-botones">
                        <NavLink to='/login'><button className='Boton-secondary' type='submit' variant='secondary'>Ya soy usuario</button></NavLink>
                            <button className= 'Boton' type='submit' variant='solid'>Crear cuenta</button>

                        </div>

                    </form>
                </main>
           
        </>
    );
}

export default Registro;
