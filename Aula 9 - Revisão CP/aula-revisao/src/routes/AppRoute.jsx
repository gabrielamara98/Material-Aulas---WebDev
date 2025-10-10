import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout"
import Card from "../components/Card";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
    path: '/',
    element: <RootLayout/>,
    children:[
        {index:true, element:<Home/>},
        {path:'about', element: <About/>},
        {path:'contact', element: <Contact/>}
    ]
}])