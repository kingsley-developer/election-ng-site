import {createRoutesFromElements,
    createBrowserRouter,
    Route,
    RouterProvider} from "react-router-dom";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import User from "./Components/user-dashboard/User";
import Tour from "./Components/Tour";

const router = createBrowserRouter(createRoutesFromElements(
    <Route>
    <Route path="/" element={<Home/>}/>
    <Route path="/dashboard" element={<User/>}/>
    <Route path="/tour" element={<Tour/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Route>   
))

export default function App(){
    return (
        <RouterProvider router={router}/>
    )
}

