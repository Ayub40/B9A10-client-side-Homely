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




const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/arts')
            },
            {
                path: '/allitem',
                element: <AllArtAndCraftItems></AllArtAndCraftItems>,
                loader: () => fetch('http://localhost:5000/arts')
            },
            {
                path: '/myitem',
                element: <PrivateRoute><MyItemList></MyItemList></PrivateRoute>,
                // loader: ({ params }) => fetch(`http://localhost:5000/arts/email/${params.email}`)
                // loader: () => fetch('http://localhost:5000/arts')
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
                element: <UpdatePage></UpdatePage>,
                loader: ({ params }) => fetch(`http://localhost:5000/arts/${params.id}`)
                // loader: () => fetch('http://localhost:5000/arts')
            },
            {
                path: '/craftdetail/:id',
                element: <CraftItemDetails></CraftItemDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/arts/${params.id}`)
                // loader: () => fetch('http://localhost:5000/arts')
            }
        ]
    },
]);

export default router;