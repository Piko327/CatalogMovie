 const   URL="http://localhost:3030/data/albums?sortBy=_createdOn%20desc" 

export async function getAll()
{ 
    let response= await fetch(URL)
    let result =await  response.json()
  
    return  result
}