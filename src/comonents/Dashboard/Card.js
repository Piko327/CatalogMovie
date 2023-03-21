import { Link } from "react-router-dom"

export const Card=(props)=>
{
   const url=`/Details/${props.value._id}` 

    return <li className="card">
    <img src={props.value.imageUrl} alt="travis" />
    <p>
      <strong>Singer/Band:</strong><span className="singer">{props.value.singer}</span>
    </p>
    <p>
      <strong>Album name: </strong><span className="album">{props.value.album}</span>
    </p>
    <p><strong>Sales:</strong><span className="sales">{props.value.sales}</span></p>
    <Link className="details-btn" to={url}>Details</Link>
  </li>
}