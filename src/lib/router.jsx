import { createBrowserRouter } from "react-router";
import Inicio from "../pages/inicio/Inicio";




const router = createBrowserRouter([{

    path: '/',
    element: <Layout />,
    children: [

        {
            index: true,
            element:<Inicio />
        }
    ]


}])



export default router