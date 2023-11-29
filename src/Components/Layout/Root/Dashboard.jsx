import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  // const [cart] = useCart();

  // // TODO: get isAdmin value from the database
  // const [isAdmin] = useAdmin();

  return (
    <div className="flex container mx-auto">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-slate-200 ">
        <ul className="menu p-4">
          {/* {isAdmin ? ( */}
          <>
            <li>
              <NavLink to="/dashboard/adminHome">
                <FaHome></FaHome>
                Admin Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/users">
                <FaUsers></FaUsers>
                Manage Users
              </NavLink>
            </li>
            <li>
              <NavLink to="/add">
                <FaUtensils></FaUtensils>
                Add Meal
              </NavLink>
            </li>
            <li>
              <NavLink to="/meal">
                <FaUtensils></FaUtensils>
                All Meals
              </NavLink>
            </li>
            <li>
              <NavLink to="/revew">
                <FaUtensils></FaUtensils>
                All review
              </NavLink>
            </li>
            <li>
              <NavLink to="/revew">
                <FaUtensils></FaUtensils>
                Serve Meal
              </NavLink>
            </li>
            <li>
              <NavLink to="/revew">
                <FaUtensils></FaUtensils>
                Upcoming Meal
              </NavLink>
            </li>
          
          </>
          {/* ) : ( */}
          <>
            <li>
              <NavLink to="/dashboard/userHome">
                <FaHome></FaHome>
                User Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/history">
                <FaUtensils></FaUtensils>
                Requested Meal
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/review">
                <FaAd></FaAd>
                My Review
              </NavLink>
            </li>
          </>
          {/* )} */}
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/meal">
              <FaSearch></FaSearch>
              All Meal
            </NavLink>
          </li>
        </ul>
      </div>
      <div className=" my-20 text-4xl font-semibold">
        {" "}
        Welocome to DashBoard
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
