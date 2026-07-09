import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../context/AuthContext"


const Login = () => {
   const {login}=useContext(AuthContext)
    const [user,setUser]=useState({email:"",password:""})
    const navigate=useNavigate()
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const local=JSON.parse(localStorage.getItem("users"))||[]
        const auth=local.find((e)=>e.email==user.email&&e.password==user.password)
        if(!auth)
        {
          alert("Invalid Credentials")  
          return
        }
        login(user)
        alert("Login Success")
        navigate("/home")




    }

   

  return (
    <>
    <form onSubmit={handleSubmit}>
    <label htmlFor="email">Enter Email</label>
    <input type="text" id="email" name="email" value={user.email} onChange={handleChange} />
    <label htmlFor="password">Enter Password</label>
    <input type="text" id="password" name="password" value={user.password} onChange={handleChange} />
    <input type="submit" value={"Login"} />
    </form>

    <button onClick={()=>navigate("/")}>Register</button>
    
    </>
  )
}

export default Login