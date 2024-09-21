import Home from "../pages/Home";
import Aboutus from "../pages/Aboutus";
import Mycart from "../pages/Mycart";
import Productdetail from "../pages/Productdetail";
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../components/Mainlayout";
import Errorpage from "../pages/Errorpage";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout/>,
        errorElement:<Errorpage/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/aboutus",
                element:<Aboutus/>
            },
            {
                path:"/mycart",
                element:<Mycart/>
            },
            {
                path:"/productdetail/:productid",
                element:<Productdetail/>
            }
        ]
    }
]);

export default router;