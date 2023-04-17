const   URL="https://back-tc2d.onrender.com" 



export async function login(data)

{
  return   fetch(URL+"/users/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
       

    }
export async function register(data)

{
  return   fetch(URL+"/users/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
       
}

export async function logout(token)

{ return   fetch(URL+"/users/logout", {
         headers: {
          "X-Authorization":token
        }
      })           
}