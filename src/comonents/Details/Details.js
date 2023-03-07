import { Link, useParams } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import { AuthContext } from "../../context/AuthContext"

 const Details =()=>{
  const{data}=useContext(DataContext)
  const{auth}=useContext(AuthContext)
  const {id} = useParams()
  const current=data.find(x=>x._id===id)


    return   <section id="details">
    <div id="details-wrapper">
      <p id="details-title">Album Details</p>
      <div id="img-wrapper">
        <img src={current.imageUrl} alt="example1" />
      </div>
      <div id="info-wrapper">
        <p><strong>Band:</strong><span id="details-singer">{current.singer}</span></p>
        <p>
          <strong>Album name:</strong><span id="details-album">{current.album}</span>
        </p>
        <p><strong>Release date:</strong><span id="details-release">{current.release}</span></p>
        <p><strong>Label:</strong><span id="details-label">{current.label}</span></p>
        <p><strong>Sales:</strong><span id="details-sales">{current.sales}</span></p>
      </div>
      <div id="action-buttons">
        {auth._id===current._ownerId
         ? <>
         <Link to={"/Edit/"+current._id} id="edit-btn">Edit</Link>
         <Link to={"/Delete/"+current._id} id="delete-btn">Delete</Link>
            </>
         :  null}
      
      </div>
    </div>
  </section>
} 

export default Details