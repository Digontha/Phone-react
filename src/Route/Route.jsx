import { createBrowserRouter } from "react-router-dom";

import Home from "../component/Home/Home";
import Navbar from "../component/Navbar/Navbar";
import Iphones from "../Iphone/Iphones";
import Details from "../component/Details/Details";
import Samsungs from "../component/Samsung/Samsungs";
import SamDetails from "../component/Samsung/SamDetails";
import Profile from "../component/Profile/Profile";



const mainLayout = createBrowserRouter([
    {
        path: "/",
        element: <Navbar></Navbar>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://openapi.programming-hero.com/api/phones?search=a'),
                element: <Home></Home>,

            },
            {
                path: '/iphone',
                loader: () => fetch('https://openapi.programming-hero.com/api/phones?search=iphone'),
                element: <Iphones></Iphones>,

            },
            {
                path: '/iphone/:slug',
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/phone/${params.slug}`),
                element: <Details></Details>,

            },
            {
                path: '/samsung',
                loader: () => fetch('https://openapi.programming-hero.com/api/phones?search=samsung'),
                element: <Samsungs></Samsungs>,

            },
            {
                path: '/samsung/:slug',
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/phone/${params.slug}`),
                element:<SamDetails></SamDetails>,

            },
            {
                path:'/profile',
                element:<Profile></Profile>
            }
        ]
    },
]);



export default mainLayout;