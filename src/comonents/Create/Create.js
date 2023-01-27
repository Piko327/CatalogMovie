import { Add } from "../../api/dataApi"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
export const Create =()=>
{

  const {auth}=useContext(AuthContext)

  let token = auth.accessToken

  console.log(token)
const navigate= useNavigate()
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

    let movie=
  {
    singer,
  album,
  imageUrl,
  release, 
  label, 
  sales,

  }
  Add(token,movie)
  
navigate("/Dashboard")
  }
  
    return    <section id="create">
    <div className="form">
      <h2>Add Album</h2>
      <form className="create-form" onSubmit={SubmitHandler}>
        <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
        <input type="text" name="album" id="album-album" placeholder="Album" />
        <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
        <input type="text" name="release" id="album-release" placeholder="Release date" />
        <input type="text" name="label" id="album-label" placeholder="Label" />
        <input type="text" name="sales" id="album-sales" placeholder="Sales" />

        <button type="submit">post</button>
      </form>
    </div>
  </section>

}