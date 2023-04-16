import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const { auth } = useContext(AuthContext);
  const [nav, setNav] = useState(true);
  const isEmpty = (obj) => Object.keys(obj).length === 0;

  const handlerNav = () => {
    setNav((nav) => !nav);
  };
  return (
    <>
      {/*  NAV */}
      <header className=" px-4 h-24 text-white flex justify-between mx-auto max-w-[1240px] items-center ">
        <Link to="/" className=" text-3xl font-bold text-rose-700 transition-transform hover:scale-105">
          REACT.
        </Link>
        <ul className=" text-white hidden md:flex font-500 text-[25px] font-">
          <li className="p-4 pl-20">
            <Link to="/Dashboard" className="">
              Dashboard
            </Link>
          </li>
          {isEmpty(auth) ? (
            <>
              <li className="p-4 pl-20">
                <Link to="/Login" className="">
                  Login{" "}
                </Link>
              </li>
              <li className="p-4 pl-20">
                <Link to="/Register">Register</Link>
              </li>
            </>
          ) : (
            <>
              <li className="p-4 px-20 truncate ">
                <Link onClick={handlerNav} className="" to="/Create">
                  Add Album
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  onClick={handlerNav}
                  className="px-5 pb-1 text-black text-bold bg-rose-700 rounded border-l-rose-700 hover:text-rose-700 hover:bg-white ease-in-out duration-300"
                  to="/Logout"
                >
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>
        <div onClick={handlerNav} className="md:hidden">
          {nav ? (
            <FiMenu className="text-2xl hover:text-3xl text-white  ease-out duration-300" />
          ) : (
            <AiOutlineClose className=" text-2xl  text-white hover:text-3xl ease-out duration-300" />
          )}
        </div>

        {/* MOBILE NAV */}
        <div
          className={
            !nav
              ? "bg-primary md:hidden h-full fixed  z-40 left-0 top-0 w-[60%] ease-in-out duration-500 "
              : "fixed left-[-100%] "
          }
        >
          <h1 className="w-full text-3xl font-bold text-rose-700  p-[20px] pb-0">
            REACT.
          </h1>
          <ul className="pt-12 text-white uppercase italic">
            <li className="p-5 border-b border-b-gray-800  hover:text-rose-700 ease-in-out duration-300 hover:font-semibold trasition:transform">
              <Link onClick={handlerNav} to="/Dashboard">
                Dashboard
              </Link>
            </li>

            {isEmpty(auth) ? (
              <>
                <li className="p-5 border-b border-b-gray-800  hover:text-rose-700 ease-in-out duration-300 hover:font-semibold trasition:transform">
                  <Link onClick={handlerNav} to="/Login">
                    Login{" "}
                  </Link>
                </li>
                <li className="p-5 border-b border-b-gray-800  hover:text-rose-700 ease-in-out duration-300 hover:font-semibold trasition:transform">
                  <Link onClick={handlerNav} to="/Register">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="p-5 border-b border-b-gray-800  hover:text-rose-700 ease-in-out duration-300 hover:font-semibold trasition:transform">
                  <Link onClick={handlerNav} to="/Create">
                    Add Album
                  </Link>
                </li>
                <li className="p-5 border-b border-b-gray-800  hover:text-rose-700 ease-in-out  duration-300 hover:font-semibold trasition:transform">
                  <Link onClick={handlerNav} to="/Logout">
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
