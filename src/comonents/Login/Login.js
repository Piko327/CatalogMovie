import { Link ,useNavigate} from "react-router-dom"
import { login } from "../../api/userApi"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
export const Login=()=>
{
 const navigate= useNavigate()
 const {setLogin,auth} =useContext(AuthContext)
   const onSubmitHandler=(e)=>
   {
    
    e.preventDefault()
    let data=Object.fromEntries(new FormData(e.target)) 
     login(data).then(resp=>{
    if(resp.email)
    {
      setLogin(resp)
      
      navigate("/")
    }
    else
    {//TO DO
      alert("go register ashole")
    }
      
    })
    


   }

    return <section id="login">
    <div className="form">
      <h2>Login</h2>
      <form className="login-form" onSubmit={onSubmitHandler}>
        <input type="text" name="email" id="email" placeholder="email" />
        <input type="password" name="password" id="password" placeholder="password" />
        <button type="submit">login</button>
        <p className="message">
          Not registered? <Link to="/Register">Create an account</Link>
        </p>
      </form>
    </div>
  </section>
} 