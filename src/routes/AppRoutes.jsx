import { Routes,Route } from "react-router-dom"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Home from "../pages/Home"
import ProtectedRoutes from "./ProtectedRoutes"
import Profile from "../pages/Profile"

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<ProtectedRoutes><Home/></ProtectedRoutes>}/>
        <Route path="/profile" element={<ProtectedRoutes><Profile/></ProtectedRoutes>}/>
    </Routes>
    </>
  )
}

export default AppRoutes