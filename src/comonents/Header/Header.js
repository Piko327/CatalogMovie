import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const { auth } = useContext(AuthContext);
  const [nav, setnav] = useState(false);
  const isEmpty = (obj) => Object.keys(obj).length === 0;

  const handlerNav = () => {setnav((nav) => !nav)}
  return (
    <>        {/*  NAV */}
      <header className=" px-4 h-24 text-white flex justify-between mx-auto max-w-[1240px] items-center ">
        <h1 className="w-full text-3xl font-bold text-[#ed1245]">REACT.</h1>
        <ul className=" text-white hidden md:flex font-500 text-2xl">
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
              <li className="p-4 pl-20">
                <Link to="/Create">Add Album</Link>
              </li>
              <li className="p-4 pl-20">
                <Link to="/Logout">Logout</Link>
              </li>
            </>
          )}
        </ul>
        <div onClick={handlerNav} className='md:hidden'>
          {nav ? (
            <FiMenu className="text-2xl hover:text-3xl ease-out duration-300" />
          ) : (
            <AiOutlineClose className=" text-2xl hover:text-3xl ease-out duration-300" />
          )}
        </div>

        {/* MOBILE NAV */}
        <div
          className={
            !nav
              ? "bg-[#000800] md:hidden h-full fixed left-0 top-0 w-[60%] ease-in-out duration-500 "
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#ed1245] p-[20px] pb-0">
            REACT.
          </h1>
          <ul className="pt-12 uppercase">
            <li className="p-5 border-b border-b-gray-800">
              <Link to="/Dashboard">Dashboard</Link>
            </li>

            {isEmpty(auth) ? (
              <>
                <li className="p-5 border-b border-b-gray-800">
                  <Link to="/Login">Login </Link>
                </li>
                <li className="p-5 border-b border-b-gray-800">
                  <Link to="/Register">Register</Link>
                </li>
              </>
            ) : (
              <>
                <li className="p-5 border-b border-b-gray-800">
                  <Link to="/Create">Add Album</Link>
                </li>
                <li className="p-5 border-b border-b-gray-800">
                  <Link to="/Logout">Logout</Link>
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
