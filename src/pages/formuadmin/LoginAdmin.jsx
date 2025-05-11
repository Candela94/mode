

const Login = () => {
    const { LogIn } = useContext(UserContext)

    const [data, setData] = useState({

        email: "",
        password: ""


    })


    const handleLogIn = async (e) => {
        e.preventDefault();

        if (!data.email || !data.password) {
            mostrarNotificacion("error", "Por favor, completa todos los datos")
            return;
        }


        try {


            const response = await fetch(`${VITE_URL}/api/v1/usuarios/login`, {
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
            console.log('Nombre recibido:', datos.user.nombre)
            console.log('Usuario:', datos.user);
            console.log('Response:', response)
            console.log('Datos:', datos)

            if (response.ok) {
                localStorage.setItem('token', datos.token)
                localStorage.setItem('userRole', datos.user.role)
                LogIn({


                    email: datos.user.email,

                    _id: datos.user.id
                })




            } else {

            }


        } catch (e) {




        }
    }

    return (

        <>

            <main className="Main-formulario">
                <div className="Notificacion-container">
                    <Notificaciones />
                </div>
                <form onSubmit={handleLogIn} className="Formulario">

                    <h1 className="Formulario-h1">Log in</h1>


                    <input onChange={handleChange} type="email" className="Formulario-mail Formulario-input" placeholder="email" value={data.email} name="email" />

                    <input onChange={handleChange} type="password" className="Formulario-password Formulario-input" placeholder="Password" value={data.password} name="password" />



                    <div className="Formulario-botones">
                       
                       <button className="Boton">Iniciar sesion</button>
                    </div>

                </form>
            </main>


        </>


    );
}

export default Login;