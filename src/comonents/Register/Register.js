import { Link } from "react-router-dom"
import { register } from "../../api/userApi"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"
export const Register =()=>
{
const {setLogin,auth} =useContext(AuthContext)
const navigate =useNavigate()
const  onSubmitHndler=(e)=>
 { 
  e.preventDefault()
  let data=Object.fromEntries(new FormData(e.target)) 
  let arr= Object.values(data)
  let email=arr[0]
  let pass=arr[1]
  let repass=arr[2]
 //to do
if(repass ==pass)
{
  let dataForServer={
    email:email,
    password:pass}
register(dataForServer).then(resp=> {
    setLogin(resp)
    navigate("/")
  })
}
else
{alert("pass not match")}

 }
    return  <section id="register">
    <div className="form">
      <h2>Register</h2>
      <form className="login-form" onSubmit={onSubmitHndler}>
        <input type="text" name="email" id="register-email" placeholder="email" />
        <input type="password" name="password" id="register-password" placeholder="password" />
        <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
        <button type="submit">register</button>
        <p className="message">Already registered? <Link to="/Login">Login</Link></p>
      </form>
    </div>
  </section>
}