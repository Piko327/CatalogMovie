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
     <header className="bg-">
          <button>react bt</button>
          <ul value={true}>
            <li>
              <Link to="/Dashboard" className="">Dashboard</Link>
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
    </>
  );
};

export default Header;
