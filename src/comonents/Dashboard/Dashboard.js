
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
    return <section className='min-h-[80vh] bg-white ' >
   {!isEmpty(data)?
    <> 
    <h2 className='pt-10 italic text-rose-700  font-bold text-center text-3xl'>ALBUMS</h2>
    <ul ul className=" mt-10 flex justify-center items-center	 flex-wrap">
     {data.map((x)=><Card  key={x._id}  value={x}/>)}
    </ul>
    </>
   : <h2 className='text-center text-3xl font-semibold pt-44 text-primary italic font-mono '  >There are no albums added yet.</h2>}
  </section>
}

export default Dashboard