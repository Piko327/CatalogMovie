import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const { auth } = useContext(AuthContext);
  // const [visible, setVisible] = useState(false);
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  return (
    <>
      <div className="">
        <header className="">
          <button>react bt</button>
          <ul value={true}>
            <li>
              <Link to="/Dashboard" className="decoration-slice">Dashboard</Link>
            </li>
            {isEmpty(auth) ? (
              <>
                <li>
                  <Link to="/Login" className="">Login </Link>
                </li>
                <li>
                  <Link to="/Register">Register</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/Create">Add Album</Link>
                </li>
                <li>
                  <Link to="/Logout">Logout</Link>
                </li>
           </>
            )}
          </ul>
        </header>
      </div>
    </>
  );
};

export default Header;
