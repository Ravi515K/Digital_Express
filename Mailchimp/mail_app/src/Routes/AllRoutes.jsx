import { Routes, Route } from "react-router-dom";
import Landing from "../Pages/Landing";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";


export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Landing />}> </Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login/>} ></Route>
        </Routes>
    )
}