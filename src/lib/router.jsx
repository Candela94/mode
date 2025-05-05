import { createBrowserRouter } from "react-router";
import Inicio from "../pages/inicio/Inicio";
import Home from "../pages/home/Home";
import Layout from '../Layout.jsx'
import Menu from "../pages/menu/Menu.jsx";



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
    ]


}])



export default router