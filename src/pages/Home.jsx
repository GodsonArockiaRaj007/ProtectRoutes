import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate=useNavigate()
    const {logout,deleteuser}=useContext(AuthContext)
    const user=JSON.parse(localStorage.getItem("currentUser"))||[]
  return (
    
    <>
    <p>Home</p>
    <p>{user?.name}</p>
    <p>{user?.email}</p>
    <p>{user?.password}</p>
    <button onClick={()=>navigate("/profile")}>Profile</button>
    <button onClick={logout}>Logout</button>
    <button onClick={()=>{
      deleteuser(user)
      logout()
    }}>Delete Account</button>
    </>
  )
}

export default Home