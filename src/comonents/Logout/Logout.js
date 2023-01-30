import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { logout } from "../../api/userApi"
import { useEffect } from "react"

 const Logout =()=>
{
let data= useContext(AuthContext)
const token = data.auth.accessToken
const navigate= useNavigate()

    useEffect(()=>{
        logout(token)
        data.setLogin({})
        navigate("/")

    })

    return null
}

export default Logout