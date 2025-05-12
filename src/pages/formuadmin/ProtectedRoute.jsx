import { Navigate, Outlet, useNavigate } from "react-router";
import {jwtDecode} from "jwt-decode";





const ProtectedRoute = ({ requiredRole }) => {



    //1. Obtener token 
    const token = localStorage.getItem('token');

    //2. Verificamos si existe el token

    if (!token) {
        console.log("No hay rol, redirigiendo a login")

        return <Navigate to='/admin/login' replace />

    }
    try {


        const decoded = jwtDecode(token);
        const userRole = decoded.role;



        //3. Verficamos si se requiere un role especifico 

        if (requiredRole && userRole !== requiredRole) {

            console.log(`Rol requerido: ${requiredRole}, Rol del usuario: ${userRole}. Acceso denegado.`);
            return <Navigate to="/admin/login" replace />;

        }

        console.log('Acceso permitido, mostrando contenido')

        return <Outlet />

    } catch (e) {
        console.error('Error al decodificar el token', e);
        localStorage.removeItem('token')
        return  <Navigate to="/admin/login" replace />;

    }









}

export default ProtectedRoute;