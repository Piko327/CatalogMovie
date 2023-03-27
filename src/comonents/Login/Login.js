import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/userApi";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { setLogin } = useContext(AuthContext);
  const [value, setValue] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const ChangeHandler = (e) => {
    setValue((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    login(value).then((resp) => {
      if (resp.email) {
        setLogin(resp);
        navigate("/");
      } else {
        setError(resp.message);
      }
    });
  };

  return (
    <section className="bg-white px-[20vw] py-[10vh] min-h-[90vh] ">
      <div className="w-[60vw] bg-rose-700 border-2 border-rose-900 rounded-3xl">
        <h2 className="text-2xl text-rose-100 italic my-10 font-bold text-center">
          Login
        </h2>
        <form
          className="flex flex-col items-center gap-5  w-full"
          onSubmit={onSubmitHandler}
        >
          <input
            className=" block w-5/6 max- my-1 mx-3 rounded h-10 border-[1px] text-center border-rose-300"
            type="text"
            name="email"
            id="email"
            placeholder="email"
            value={value.email}
            onChange={ChangeHandler}
          />

          <input
            className=" block w-5/6 max- my-1 mx-3 rounded h-10 border-[1px] text-center border-rose-300"
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={value.password}
            onChange={ChangeHandler}
          />
          <button
            className="mt-5 border-[0.5px] enabled:mb-7 trxt-primary border-rose-900 italic text-semibold rounded-full capitalize px-6 m-1 py-1 text-bold bg-rose-200 enabled:hover:bg-primary enabled:hover:text-rose-200 duration-500 ease-in-out enabled:hover:border-rose-700"
            type="submit"
          >
            login
          </button>

          {error && <div className="errorMessage ">{error}</div>}
          <p className="text-rose-100 font-mono text-center mb-2 ">
            Not registered? <Link className='text-primary  text-bold italic' to="/Register">Create an account</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
