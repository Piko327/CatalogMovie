import { Link } from "react-router-dom"

export const Header =()=>{
    
    return  <header>
    {/* <!-- Navigation --> */}
    <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

    <nav>
      <div>
        <Link to="/Dashboard">Dashboard</Link>
      </div>

      {/* <!-- Logged-in users --> */}
      <div class="user">
        <Link to="/Create">Add Album</Link>
        <Link to="/Logout">Logout</Link>
      </div>

      {/* <!-- Guest users --> */}
      <div class="guest">
        <Link href="/Login">Login</Link>
        <Link to="/Register">Register</Link>
      </div>
    </nav>
  </header>

    
}