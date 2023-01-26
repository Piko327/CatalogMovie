
import { useState,useEffect } from 'react';
import { getAll } from "../../api/dataApi";
import { Card  } from "./Card";
export const Dashboard =()=>
{
  const [data, setData] = useState([]);  
  
  useEffect(() => {
    getAll()
      .then(data => setData(data))
     ;
  }, []);

  
    return <section id="dashboard">
   {data ?
    <> <h2>Albums</h2>
    <ul className="card-wrapper">
     {data.map((x)=><Card key={x._id}  value={x}/>)}
    
    </ul>
    </>
   : <h2>There are no albums added yet.</h2>}
  </section>
}