import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/userApi";
import { useContext, useState} from "react";
import { AuthContext } from "../../context/AuthContext";



const Login = () => {
  const navigate = useNavigate();
  const {setLogin} = useContext(AuthContext);
  const [value, setValue] = useState({ email: "",password: "",});
  const [error, setError] = useState("");
  

        const ChangeHandler=(e) => {
  setValue((state) => ({
      ...state,
      [e.target.name]: e.target.value,
      }));};


  const onSubmitHandler = (e) => {
    e.preventDefault();
    login(value).then((resp) => {
      if (resp.email) {
        setLogin(resp);
        navigate("/");}
      else
      { setError(resp.message)}})}
  return (
    <section id="login">
      <div className="form">
        <h2>Login</h2>
        <form className="login-form" onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            value={value.email}
            onChange={ChangeHandler}/>
        
         <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={value.password}
            onChange={ChangeHandler}/>
          <button type="submit" >login</button>
          {error && <div className="errorMessage">{error}</div>}
          <p className="message">
            Not registered? <Link to="/Register">Create an account</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
