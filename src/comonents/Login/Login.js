import { Link } from "react-router-dom"

export const Login=()=>
{
    return <section id="login">
    <div className="form">
      <h2>Login</h2>
      <form class="login-form">
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