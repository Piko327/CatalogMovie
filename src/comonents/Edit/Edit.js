import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { DataContext } from "../../context/DataContext"
import { AddEdit } from "../../api/dataApi"
import { AuthContext } from "../../context/AuthContext"
import Details from "../Details/Details"

 const Edit=()=>
{
  const navigate= useNavigate()
 const{data}=useContext(DataContext)
 const {auth}= useContext(AuthContext)
 const token = auth.accessToken
const  {id}= useParams()
const current=data.find(x=>x._id===id)

const [value, setValue] = useState({
  singer:"",
  album:"",
  imageUrl:"",
  release:"",
  label:"",
  sales:"",

 });
   
const  ChangeHandler=(e)=>
{
  setValue(state=>({
    ...state,
    [e.target.name]:e.target.value
  }))
}
 
 
const SubmitHandler =(e)=>
{
e.preventDefault()
const { singer,
album,
imageUrl,
release,
label,
sales,
}=value

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
        <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" defaultValue={current.singer} value={value.singer}  onChange={ChangeHandler}/>
        <input type="text" name="album" id="album-album" placeholder="Album" defaultValue={current.album} value={value.album}  onChange={ChangeHandler}/>
        <input type="text" name="imageUrl" id="album-img" placeholder="Image url" defaultValue={current.imageUrl} value={value.imageUrl}  onChange={ChangeHandler}/>
        <input type="text" name="release" id="album-release" placeholder="Release date" defaultValue={current.release}  value={value.release}  onChange={ChangeHandler}/>
        <input type="text" name="label" id="album-label" placeholder="Label" defaultValue={current.label}  value={value.label}  onChange={ChangeHandler}/>
        <input type="text" name="sales" id="album-sales" placeholder="Sales" defaultValue={current.sales} value={value.sales}  onChange={ChangeHandler}/>

        <button type="submit">post</button>
      </form>
    </div>
  </section>
}

export default Details