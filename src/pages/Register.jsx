import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Register = () => {
    const [user,setUser]=useState({name:"",email:"",password:""})
    
    const navigate=useNavigate()
    const handleChange=(e)=>
    {
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const local=JSON.parse(localStorage.getItem("users"))||[]
        if(user.name==""||user.email==""||user.password=="")
        {
            alert("Fill all the details")
        }
        local.push(user)
        localStorage.setItem("users",JSON.stringify(local))
        alert("Registered Successfully")
        navigate("/login")
    }


  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter name</label>
        <input type="text" id="name" name="name" value={user.name} onChange={handleChange} />
        <label htmlFor="email">Enter Email</label>
        <input type="text" id="email" name="email" value={user.email} onChange={handleChange}/>
        <label htmlFor="password">Enter Password</label>
        <input type="text" id="password" name="password" value={user.password} onChange={handleChange}/>
        <input type="submit" value={"Submit"} />
    </form>
    <button onClick={()=>navigate("/login")}>Login</button>
    
    </>
  )
}

export default Register