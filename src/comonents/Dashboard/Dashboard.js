
import { useEffect, useContext } from 'react';
import { getAll } from "../../api/dataApi";
import { DataContext } from '../../context/DataContext';
import { Card  } from "./Card";
const Dashboard =()=>
{


const isEmpty=(obj) =>Object.keys(obj).length===0;
 const {data,setInfo} = useContext(DataContext)


  useEffect(() => {
    getAll()
      .then(data =>setInfo( data)).then()
      ;}, []);
    return <section id="dashboard">
   {!isEmpty(data)?
    <> 
    <h2>ALBUMS</h2>
    <ul ul className="card-wrapper">
     {data.map((x)=><Card  key={x._id}  value={x}/>)}
    </ul>
    </>
   : <h2>There are no albums added yet.</h2>}
  </section>
}

export default Dashboard