import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { NavLink, Link } from "react-router-dom";
import Dashboard from "../../Layout/Root/Dashboard";

const Navbar = () => {
  // const [theme, settheme] = useState(
  //   localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  // );
  // const handletoggle = (e) => {
  //   if (e.target.checked) {
  //     settheme("dark");
  //   } else {
  //     settheme("light");
  //   }
  // };
  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   const localtheme = localStorage.getItem("theme");
  //   document.querySelector("html").setAttribute("data-theme", localtheme);
  // });

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => toast("logged out successfully"))
      .catch((error) => console.error(error));
  };
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/meal">Meals</NavLink>
      </li>
      {!user && <></>} {user && <></>}
    </>
  );
  return (
    <div className="container mx-auto my-6 ">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <a href="/" className="btn btn-ghost normal-case text-3xl">
            <img
              className="h-[40px]"
              src="https://i.ibb.co/hXqf6GY/letter-s-with-spoon-fork-logo-tableware-logo-fast-food-restaurant-logo-65373-25.jpg"
            ></img>
            <span className="text-[#EAA334] ">UNI</span> MEAL
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>

        <div className="navbar-end gap-1 flex flex-col-reverse pl-10 pt- md:flex-row md:pl-0 md:pt-0">
          <NavLink to="/mealup">
            <img
              className="h-[30px] w-[30px]"
              src="https://i.ibb.co/wd5kTrj/2474912.webp"
            ></img>
          </NavLink>

          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost ">
                  <img
                    className="w-[35px] h-[35px] rounded-full"
                    src={user.photoURL}
                  ></img>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
                >
                  <li className="p-3">{user.displayName}</li>
                  <li>
                    <Link to="dashboard">
                      {" "}
                      <a>Dashboard</a>
                    </Link>
                  </li>

                  <a onClick={handleLogOut} className="btn btn-sm mt-2">
                    Sign out
                  </a>
                </ul>
              </div>
            </>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm">Join Us</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
