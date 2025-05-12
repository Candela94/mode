import { useContext, useState } from "react"
import { UserContext } from "../../../context/userContext"
import { useNavigate } from "react-router"

const Login = () => {
    const { LogIn } = useContext(UserContext)
    const VITE_URL= import.meta.env.VITE_URL
    const navigate = useNavigate();

    const [data, setData] = useState({

        email: "",
        password: ""


    })


    const handleChange = (e) => { // Definir la función handleChange que estaba faltando
        const { name, value } = e.target
        setData((prev) => ({ ...prev, [name]: value }))
    }


    const handleLogIn = async (e) => {
        e.preventDefault();

        if (!data.email || !data.password) {
            alert("Por favor, completa todos los datos")
            return;
        }


        try {


            const response = await fetch(`${VITE_URL}/api/v1/admin/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,

                })
            })

            const datos = await response.json();
          
            console.log('Response:', response)
            console.log('Datos:', datos)

            if (response.ok) {
                localStorage.setItem('token', datos.token)
                localStorage.setItem('userRole', datos.user.role)
                LogIn({


                    email: datos.user.email,

                    _id: datos.user.id
                })

                navigate('/admin/proyectos')




            } else {
                alert(datos.mensaje || 'Error en login')

            }


        } catch (e) {

            console.error('Error en login:', e)
            alert('Error de conexión')


        }
    }

    return (

        <>

            <main className="Main-formulario">
                <div className="Notificacion-container">
                   
                </div>
                <form onSubmit={handleLogIn} className="Formulario">

                    <h1 className="Formulario-h1">Log in</h1>


                    <input onChange={handleChange} type="email" className="Formulario-mail Formulario-input" placeholder="email" value={data.email} name="email" />

                    <input onChange={handleChange} type="password" className="Formulario-password Formulario-input" placeholder="Password" value={data.password} name="password" />



                    <div className="Formulario-botones">
                       
                       <button type='submit' className="Boton">Iniciar sesion</button>
                    </div>

                </form>
            </main>


        </>


    );
}

export default Login;