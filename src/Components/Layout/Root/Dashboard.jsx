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
import { useState, useEffect } from "react";
import useAdmin from "../../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";

const Dashboard = () => {
  // const [cart] = useCart();

  // // TODO: get isAdmin value from the database
  // const [isAdmin] = useAdmin();

  let User;
  const [cards, setcards] = useState([]);
  const [users, setusers] = useState([]);
  const { user, logOut } = useContext(AuthContext);
  const [count, setcount] = useState([]);
  const Users2 = () => {
    const { data: users } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await fetch("http://localhost:5000/meal");
        return res.json();
      },
    });
  };
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setusers(data));
  }, []);
  // console.log(Users2);
  useEffect(() => {
    fetch("http://localhost:5000/meal")
      .then((res) => res.json())
      .then((data) => setcards(data));
  }, []);
  const [isAdmin] = useAdmin();

  let check = users.filter((card) => card.email == user.email);
  // console.log(check);

  return (
    <div className="flex ">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-slate-200 ">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/Useradmin">
                  <FaHome></FaHome>
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manusers">
                  <FaUsers></FaUsers>
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add">
                  <FaUtensils></FaUtensils>
                  Add Meal
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allmeals">
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
                <NavLink to="/dashboard/Upmealdash">
                  <FaUtensils></FaUtensils>
                  Upcoming Meal
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/Userprofile">
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
          )}
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

      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
