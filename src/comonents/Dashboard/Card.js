import { Link } from "react-router-dom"

export const Card=(props)=>
{
   const url=`/Details/${props.value._id}` 

    return <li className='group bg-[#000000] m-4 relative h-80 w-72 rounded-xl  overflow-hidden shadow-2xl text-center  cursor-pointer inline-block ' >
    <img src={props.value.imageUrl} className=' w-full h-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform' alt="travis" />
    <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black  group-hover:from-sky-900/90 group-hover:via-sky-900/60 group-hover:to-rose-900/70 ' ></div>
    <div className='absolute  inset-0 flex flex-col items-center justify-center px-9   text-center translate-y-[70%] group-hover:translate-y-0 group-hover:transition-all ease-in-out' >
     <p className="text-center m-5">
     <div className="bg-rose-600 blur-lg opacity-50 absolute px-12 py-1 text-rose-700">amet</div>

      <strong className='text-primary  p-1 relative text-xl '>Singer/Band</strong>
      <p className='text-rose-200 text-2xl'>{props.value.singer}</p>
    </p>
    <Link className='mt-5 border-[0.5px] border-black rounded-full capitalize px-4 py-2 text-bold bg-rose-700 hover:text-rose-900 hover:bg-rose-200 duration-200 ease-in-out hover:border-rose-700 ' to={url}>Details</Link>
    </div>
  </li>
}