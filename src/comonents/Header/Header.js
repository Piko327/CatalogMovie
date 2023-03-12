import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"

const Header =()=>{
    
  const {auth} =useContext(AuthContext)

  //du=inamic
  const [visible, setVisible] = useState(true);

  const dynamicNavbar = (e) => {
    if (e.pageX<=935 && visible === true)
    setVisible(false) 
     else 
     setVisible(true);
  };

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
    return <div className={visible ? "closed":"opened"} >
     <header className={visible ?"header_nav active":"header_nav " }>
    <nav>
  <button className="material-symbols-outlined"  onClick={dynamicNavbar}>
         {visible ? "menu":"close"}</button>
    <div>
  <Link to="/Dashboard">Dashboard</Link>
</div>
{isEmpty(auth)
?   
<div className="guest">
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
      </div>
:
<div className="user">
<Link to="/Create">Add Album</Link>
<Link to="/Logout">Logout</Link>
</div>
}
    </nav>
  </header>
</div>
    
}

export default Header