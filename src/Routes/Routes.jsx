// import { Root } from "postcss";
import { createBrowserRouter } from "react-router-dom";
// import ErrorPage from "../ExtraPage/ErrorPage";
// import Home from "../Home/Home";
import Root from "./Root";
import ErrorPage from "../ExtraPage/ErrorPage";
import Home from "../Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddCraftItem from "../AddCraftItem/AddCraftItem";
import UpdatePage from "../Pages/UpdatePage";
import CraftItemDetails from "../Pages/CraftItemDetails";
import AllArtAndCraftItems from "../AllArtAndCraftItems/AllArtAndCraftItems";
import MyItemList from "../MyItem/MyItemList";
import PrivateRoute from "../Provider/PrivateRoute";
// import LandscapePainting from "../Home/LandscapePainting";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://ak-art-server.vercel.app/arts')
            },
            {
                path: '/allitem',
                element: <AllArtAndCraftItems></AllArtAndCraftItems>,
                loader: () => fetch('https://ak-art-server.vercel.app/arts')
            },
            {
                path: '/myitem',
                element: <PrivateRoute><MyItemList></MyItemList></PrivateRoute>,
                // loader: ({ params }) => fetch(`https://ak-art-server.vercel.app/arts/email/${params.email}`)
                // loader: () => fetch('https://ak-art-server.vercel.app/arts')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/additem',
                element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
                loader: ({ params }) => fetch(`https://ak-art-server.vercel.app/arts/${params.id}`)
                // loader: () => fetch('https://ak-art-server.vercel.app/arts')
            },
            {
                path: '/craftdetail/:id',
                element: <PrivateRoute><CraftItemDetails></CraftItemDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://ak-art-server.vercel.app/arts/${params.id}`)
                // loader: () => fetch('https://ak-art-server.vercel.app/arts')
            },
            // {
            //     path: '/landscape/:subcategory_name',
            //     element: <LandscapePainting></LandscapePainting>,
            //     loader: () => fetch('https://ak-art-server.vercel.app/crafts')
            // }
        ]
    },
]);

export default router;