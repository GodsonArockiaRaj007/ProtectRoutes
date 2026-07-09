import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext

export const AuthProvider=({children})=>{
    const [user,setUser]=useState()
    const navigate=useNavigate()
    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem("users"))
        setUser(user)
    },[])

    const login=(currentuser)=>{

        const current=user.find((e)=>e.email==currentuser.email&& e.password==currentuser.password)
        localStorage.setItem("currentUser",JSON.stringify(current))
    }

    const logout=()=>{
        localStorage.removeItem("currentUser")
        navigate("/login")
        
    }

    const deleteuser=(current)=>{

        const all=JSON.parse(localStorage.getItem("users"))
        const newuser=all.filter((e)=>e.email!=current.email&& e.password==current.password)
        localStorage.setItem("users",JSON.stringify(newuser))
    }

    return(
       <AuthContext.Provider value={{login,logout,deleteuser}}>
        {children}
       </AuthContext.Provider>
    )

}