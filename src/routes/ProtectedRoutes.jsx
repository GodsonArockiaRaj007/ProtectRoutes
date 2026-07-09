import { Navigate } from "react-router-dom"


const ProtectedRoutes = ({children}) => {
    const user=JSON.parse(localStorage.getItem("currentUser"))
  return user?children:<Navigate to={"/login"}/>
}

export default ProtectedRoutes