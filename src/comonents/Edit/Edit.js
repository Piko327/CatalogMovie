import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { DataContext } from "../../context/DataContext"
import { AddEdit } from "../../api/dataApi"
import { AuthContext } from "../../context/AuthContext"
import Details from "../Details/Details"

 const Edit =()=>
{
  const navigate= useNavigate()
 const{data}=useContext(DataContext)
 const {auth}= useContext(AuthContext)
 const token = auth.accessToken
const  {id}= useParams()
const current=data.find(x=>x._id==id)

 
const SubmitHandler =(e)=>
{
e.preventDefault()
const { singer,
album,
imageUrl,
release,
label,
sales,
}=Object.fromEntries(new FormData(e.target))

AddEdit(token,{
  singer,
  album,
  imageUrl,
  release, 
  label, 
  sales,
 },id)
navigate("/Dashboard")
}


    return    <section id="edit">
    <div className="form">
      <h2>Edit Album</h2>
      <form className="edit-form" onSubmit={SubmitHandler}>
        <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" defaultValue={current.singer}/>
        <input type="text" name="album" id="album-album" placeholder="Album" defaultValue={current.album}/>
        <input type="text" name="imageUrl" id="album-img" placeholder="Image url" defaultValue={current.imageUrl}/>
        <input type="text" name="release" id="album-release" placeholder="Release date" defaultValue={current.release}/>
        <input type="text" name="label" id="album-label" placeholder="Label" defaultValue={current.label}/>
        <input type="text" name="sales" id="album-sales" placeholder="Sales" defaultValue={current.sales} />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
}

export default Details