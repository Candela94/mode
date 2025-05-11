import { createBrowserRouter } from "react-router";
import Inicio from "../pages/inicio/Inicio";
import Home from "../pages/home/Home";
import Layout from '../Layout.jsx'
import Menu from "../pages/menu/Menu.jsx";
import FormuProyecto from "../pages/formuadmin/FormuProyecto.jsx";
import Login from "../pages/formuadmin/LoginAdmin.jsx";
import ProtectedRoute from "../pages/formuadmin/ProtectedRoute.jsx";
const router = createBrowserRouter([{

    path: '/',
    element: <Layout />,
    children: [

        {
            index: true,
            element:<Inicio />
        },

        {
            path:"/home",
            element: <Home />
        },

        {
            path:"/menu",
            element: <Menu />
        },

        {

            path:"/admin/login",
            element: <ProtectedRoute requiredRole = 'admin' />,
            children : [
                {
                index : true ,
                element : <Login />
                }
            ]
        },



        {
            
            path:"/admin/register",
            element: <ProtectedRoute requiredRole = 'admin' />,
            children : [
                {
                index : true ,
                element : <Login />
                }
            ]
        },


       


        {
            path:"/admin/proyectos",
            element: <ProtectedRoute requiredRole = 'admin' />,
            children : [
                {
                index : true ,
                element : <FormuProyecto />
                }
            ]
        },
    ]


}])



export default router