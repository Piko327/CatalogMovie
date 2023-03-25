import { Link, useParams } from "react-router-dom";
import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import { AuthContext } from "../../context/AuthContext"

 const Details =()=>{
  const{data}=useContext(DataContext)
  const{auth}=useContext(AuthContext)
  const {id} = useParams()
  const current=data.find(x=>x._id===id)


    return   <section id="details " className='bg-white min-h-[80vh]'>
    <h1 className="text-bold text-2xl uppercase text-center py-10 italic font-mono">Album Details</h1>
     <div className='  group flex lg:gap-9 gap-3 transition-opacity p-10 flex-col md:flex-row md:justify-center items-center'>
    <img src={current.imageUrl} className='w-72 md:w-[40vh] lg:w-[50vh] group  group-hover:rotate-1 group-hover:scale-105 transition-transform shadow-2xl relative z-10' alt="example1" />
      <div className='w-72 pl-4 md:w-80 md:h-[40vh]  md:p-9 md:text-xl lg:w-[30vw] lg:text-2xl lg:h-[50vh] lg:pt-[10vh]  bg-rose-700 shadow-2xl text-center rounded-b-xl pt-4  group-hover:rotate-1 group-hover:scale-105  relative z-100 md:rounded-none md:rounded-r-xl  transition-transform  '>
         <p className="flex justify-right"><strong className='text-primary' >Singer/Band:</strong><span  className='text-rose-200  md:truncate pl-1 italic font-medium' >{current.singer}</span></p>
         <p className="flex justify-right"><strong className='text-primary'  >Album name: </strong><span className='text-rose-200 pl-1 italic font-medium' >{current.album}</span></p>
        <p className="flex justify-right"><strong className='text-primary' >Band:</strong><span  className='text-rose-200 pl-1 italic font-medium'>{current.singer}</span></p>
        <p className="flex justify-right"> <strong className='text-primary'>Album name:</strong><span  className='text-rose-200 pl-1 italic font-medium'>{current.album}</span></p>
        <p className="flex justify-right"><strong className='text-primary'>Release date:</strong><span className='text-rose-200 pl-1 italic font-medium' id="details-release">{current.release}</span></p>
        <p className="flex justify-right"><strong className='text-primary'>Label:</strong><span className='text-rose-200 pl-1 italic font-medium' id="details-label">{current.label}</span></p>
        <p className="flex justify-right"><strong className='text-primary'>Sales:</strong><span className='text-rose-200 pl-1 italic font-medium' id="details-sales">{current.sales}</span></p>
        <div className="m-4 lg:mt-10  my-6 text-center">
        {auth._id === current._ownerId && (
  <>
    <Link
      to={"/Edit/" + current._id}
      className="mt-5 border-[0.5px] border-black italic font-mono rounded-full capitalize px-6 m-1 py-2 text-bold bg-rose-200 hover:bg-primary hover:text-rose-200 duration-500 ease-in-out hover:border-rose-700"
    >
      Edit
    </Link>
    <Link
      to={"/Delete/" + current._id}
      className="mt-5 border-[0.5px] border-black italic font-mono rounded-full capitalize px-4 m-1 py-2 text-bold bg-rose-200 hover:bg-primary hover:text-rose-200 duration-500 ease-in-out hover:border-rose-700"
    >
      Delete
    </Link>
  </>
)}
      </div>
      </div>
    
      </div>
   
  </section>
} 

export default Details