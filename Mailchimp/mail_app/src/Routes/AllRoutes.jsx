import { Routes, Route } from "react-router-dom";
import Landing from "../Pages/Landing";
import Login from "../Pages/Login";
import MarketingPlatform from "../Pages/MarketingPlatform";
import SignUp from "../Pages/SignUp";
import Transaction from "../Pages/Transaction";
import Websites from "../Pages/Websites";


export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Landing />}> </Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/marketing" element={<MarketingPlatform />}></Route>
            <Route path="/websites" element={<Websites />}></Route>
            <Route path="/transaction" element={<Transaction />}></Route>

        </Routes>
    )
}