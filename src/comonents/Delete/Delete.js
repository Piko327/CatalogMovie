import { AuthContext,  } from "../../context/AuthContext"
import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { useEffect } from "react"
import { Del } from "../../api/dataApi"

export const Delete =()=>
{ const navigate= useNavigate()
const {auth}=useContext(AuthContext)
const  {id}= useParams()
const token= auth.accessToken


    useEffect(()=>{
        Del(id,token)
        

    })

    return null
}