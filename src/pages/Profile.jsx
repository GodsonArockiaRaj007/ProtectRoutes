import { useNavigate } from "react-router-dom"


const Profile = () => {
    const user=JSON.parse(localStorage.getItem("currentUser"))||[]
    const navigate=useNavigate()
  return (
    <>
     <p>{user?.name}</p>
    <p>{user?.email}</p>
    <p>{user?.password}</p>

    <button onClick={()=>navigate(-1)}>Back</button>
   
    </>
  )
}

export default Profile