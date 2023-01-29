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

export async function Add(token,data)
{
    fetch(URL, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    "X-Authorization":token
  }
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}
export async function Del(id,token)
{
  
    fetch(URL+"/"+id, {
  method: "DELETE",

  headers: {
    "Content-type": "application/json; charset=UTF-8",
   "X-Authorization": token
  }
})
  .then((response) => response.json())
  .then((json) => console.log(json));

}
export async function   AddEdit(token,data,id)
{
     fetch(URL+"/"+id, {
  method: "PUT",
  body: JSON.stringify(data),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    "X-Authorization":token
  }
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}