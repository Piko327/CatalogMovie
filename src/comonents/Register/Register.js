import { Link } from "react-router-dom"
import { register } from "../../api/userApi"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { useContext, nothing,useState } from "react"
 const Register =()=>
{

const {setLogin,auth} =useContext(AuthContext)
const [error, setError] = useState({ email:"",password: "",});
const navigate =useNavigate()
const [value, setValue] = useState({
  email:"",
  password:"",
  repassword:"",

 });
 const  CheckPassword=()=> 
 {
     let message=""
    if (value.password.length < 8) {
      message="Password should be at least 8 characters long"
      setError((state) => ({
        ...state,
        password:message,
        }))
    }
    // Password should contain at least one uppercase letter
    if (!/[A-Z]/.test(value.password)) {
      message="Password should contain at least one uppercase letter"
      setError((error) => ({
        ...error,
        password:message
        }))
    }
    if (!/\d/.test(value.password)) {
      message="Password should contain at least one digit"
      setError((state) => ({
        ...state,
        password:message,
        }))
    }
    // Password should contain at least one lowercase letter
    if (!/[a-z]/.test(value.password)) {
     message=("Password should contain at least one lowercase letter")
     setError((state) => ({
      ...state,
      password:message,
      }))
    }
  if(message==="")
   {
      setError((state) => ({
        ...state,
        password:message}))} 
     
  };  
  const validateEmail=()=>{
 
   const regex = /\S+@\S+\.\S+/

   if(regex.test(value.email))

     {  setError((state) => ({
       ...state,
       email:"",
       })) }
     else
     setError((state) => ({
       ...state,
       email:"Ivalid email adres",
       })) }
   
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
  setError((state) => ({
    ...state,
    password:"",
    }))

  let data={
    email:value.email,
    password:value.password}
    
register(data).then(resp=> {
 if(resp.message)
 {
  setError((state) => ({
    ...state,
    password:resp.message,
    }))
 }else if(resp.email)
 {setLogin(resp)

navigate("/")

 }
  })
}else
{
  setError((state) => ({
    ...state,
    password:"passwords must be same",
    }))
}


    }
    return  <section id="register">
    <div className="form">
      <h2>Register</h2>
      <form className="login-form" onSubmit={onSubmitHndler}>
        <input type="text" name="email" id="register-email" placeholder="email"   value={value.email}  onChange={ChangeHandler}     onBlur={validateEmail} />
        {value.email ?
         <div>{error.email}</div>
         :nothing}
        <input type="password" name="password" id="register-password" placeholder="password"   value={value.password}  onChange={ChangeHandler}  onBlur={CheckPassword}/>
        <input type="password" name="repassword" id="repeat-password" placeholder="repeat password"  value={value.repassword}  onChange={ChangeHandler} 
        />
        {value.password ?
         <div>{error.password}</div>
         :nothing}
        <button type="submit" disabled={!Object.entries(error).some(x=>x)} >register</button>
        <p className="message">Already registered? <Link to="/Login">Login</Link></p>
      </form>
    </div>
  </section>
}

export default Register