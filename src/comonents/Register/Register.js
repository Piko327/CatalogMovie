import { Link } from "react-router-dom";
import { register } from "../../api/userApi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, nothing, useState } from "react";

const Register = () => {
  const { setLogin } = useContext(AuthContext);
  const [error, setError] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    password: "",
    repassword: "",
  });

const passChecker=()=>{
  console.log("ko")
   if(value.password===value.repassword) {
    console.log("w")
      setError((state) => ({
        ...state,
        password:"",}))}
      
      else if(value.password!==value.repassword)
      {
        setError((state) => ({
          ...state,
          password:"Password should  be same"}))}
        }
  const CheckPassword = () => {
    let message = "";
    if (value.password==="") {
      setError((state) => ({
        ...state,
        password: "",
      }));
    }
    else if (value.password.length < 8) {
      message = "Password should be at least 8 characters long";
      setError((state) => ({
        ...state,
        password: message,
      }));
    }

    // Password should contain at least one uppercase letter
    else if (!/[A-Z]/.test(value.password)) {
      message = "Password should contain at least one uppercase letter";
      setError((error) => ({
        ...error,
        password: message,
      }));
    }
    else if (!/\d/.test(value.password)) {
      message = "Password should contain at least one digit";
      setError((state) => ({
        ...state,
        password: message,
      }));
    }
    // Password should contain at least one lowercase letter
    else if (!/[a-z]/.test(value.password)) {
      message = "Password should contain at least one lowercase letter";
      setError((state) => ({
        ...state,
        password: message,
      }));
    }
    if(message==="")
    {
      setError((state) => ({
        ...state,
        password: message,
      }))
    }
    
  };
  const validateEmail = () => {
    const regex = /\S+@\S+\.\S+/;

    if (regex.test(value.email) || value.email==="" ) {
      setError((state) => ({
        ...state,
        email: "",
      }));
    } else
      setError((state) => ({
        ...state,
        email: "Invalid email address.",
      }));
  };

  const ChangeHandler = (e) => {
    setValue((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmtHndler = (e) => {
    e.preventDefault();

      let data = {
        email: value.email,
        password: value.password,};

      register(data).then((resp) => {
        if (resp.message) {
          setError((state) => ({
            ...state,
            password: resp.message,
          }));
        } else if (resp.email) {
          setLogin(resp);
          navigate("/");
        }})
  };
  return (
    <section className="bg-white px-[20vw] py-[10vh] min-h-[80vh] ">
      <div className="w-[60vw] bg-rose-700 border-2 border-rose-900 rounded-3xl">
        <h2 className="text-2xl text-rose-100 italic my-10 font-bold text-center">
          Register
        </h2>
        <form
          className="flex flex-col items-center gap-5  w-full"
          onSubmit={onSubmtHndler}
        >
          <input
            className=" block w-5/6 max- my-1 mx-3 rounded h-10 border-[1px] text-center border-rose-300"
            type="text"
            name="email"
            placeholder="email"
            value={value.email}
            onChange={ChangeHandler}
            onInput={validateEmail}
          />
          {value.email?<div role={"error"}>{error.email}</div> : nothing}
          <input
            className=" block w-5/6 max- my-1 mx-3 rounded h-10 border-[1px] text-center border-rose-300"
            type="password"
            name="password"
            placeholder="password"
            value={value.password}
            onChange={ChangeHandler}
            onInput={CheckPassword}
          />
             <input
            className=" block w-5/6 max- my-1 mx-3 rounded h-10 border-[1px] text-center border-rose-300"
            type="password"
            name="repassword"
            placeholder="repassword"
            value={value.repassword}
            onChange={ChangeHandler}
            onBlur={passChecker}
         
            />
          {value.password ? <div role={"error"} >{error.password}</div>:nothing}
          <button
          name='registerBtn'
            type="submit"
            className="mt-5 border-[0.5px] enabled:mb-7 trxt-primary border-rose-900 italic text-semibold rounded-full capitalize px-6 m-1 py-1 text-bold bg-rose-200 enabled:hover:bg-primary enabled:hover:text-rose-200 duration-500 ease-in-out enabled:hover:border-rose-700"
            disabled={ !(Object.values(error).every(x=>x==="") && Object.values(value).every(x=>x!==""))}
          >
            register
          </button>
          <p className="text-rose-100 font-mono text-center m-2">
            Already registered? <Link className='text-primary text-bold italic' to="/Login">Login</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
