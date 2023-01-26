 const   URL="http://localhost:3030/data/albums" 

export async function getAll()
{ 
    let response= await fetch(URL+"?sortBy=_createdOn%20desc")
    let result =await  response.json()
  
    return  result
}

export async function getById(id)
{
    let response= await fetch(URL+id)
    let result =await  response.json()
  
    return  result
}

export async function Add(data)
{
    fetch(URL, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}