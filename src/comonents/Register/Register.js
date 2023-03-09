import { Link } from "react-router-dom"
import { register } from "../../api/userApi"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { useContext, useState } from "react"
 const Register =()=>
{
const {setLogin,auth} =useContext(AuthContext)
const navigate =useNavigate()
const [value, setValue] = useState({
  email:"",
  password:"",
  repassword:"",

 });
   
const  ChangeHandler=(e)=>
{
  setValue(state=>({
    ...state,
    [e.target.name]:e.target.value
  }))
}
 
const  onSubmitHndler=(e)=>
 { 
  e.preventDefault()

  
if(value.password===value.repassword)
{
  let data={
    email:value.email,
    password:value.password}
register(data).then(resp=> {
    setLogin(resp)
    navigate("/")
  })
}
else
{}
    }
    return  <section id="register">
    <div className="form">
      <h2>Register</h2>
      <form className="login-form" onSubmit={onSubmitHndler}>
        <input type="text" name="email" id="register-email" placeholder="email"   value={value.email}  onChange={ChangeHandler}/>
        <input type="password" name="password" id="register-password" placeholder="password"   value={value.password}  onChange={ChangeHandler}/>
        <input type="password" name="repassword" id="repeat-password" placeholder="repeat password"  value={value.repassword}  onChange={ChangeHandler} />
        <button type="submit">register</button>
        <p className="message">Already registered? <Link to="/Login">Login</Link></p>
      </form>
    </div>
  </section>
}

export default Register