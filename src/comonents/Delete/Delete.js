import { AuthContext,  } from "../../context/AuthContext"
import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { Del } from "../../api/dataApi"

 const Delete =()=>
{ const navigate= useNavigate()
const {auth}=useContext(AuthContext)
const  {id}= useParams()
const token= auth.accessToken


    useEffect(()=>{
        Del(id,token)
        navigate("/Dashboard")
    })
    return null
}


export default Delete