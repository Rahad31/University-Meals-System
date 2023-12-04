import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState, useContext } from "react";
import Check from "../Check/Check";
const Membercart = ({ mem }) => {
  const { img, price, membership } = mem;
  const { user } = useContext(AuthContext);
  // console.log(user.email);
  // const [carts, setcarts] = useState();
  // // const [displaycard, setDisplaycard] = useState(carts);
  // // console.log(carts);
  // //  console.log(user.email);
  // let fil = carts.find((card) => card.email == user.email);

  // setcarts(fil._id);

  // useEffect(() => {
  //   fetch("https://uni-meal-server.vercel.app/users")
  //     .then((res) => res.json())
  //     .then((data) => setcarts(data));
  // }, []);
  // console.log(carts);
  // // let fil = carts.filter((card) => card.email == user.email);

  return (
    <div>
      <div className="flex flex-col gap-2 border-4 justfy-center items-center ">
        <img
          src={img}
          className="h-[300px] w-[300px] m-2 rounded-full p-2 bg-white border-black"
        ></img>

        <h3 className="text-center border-4 w-full border-black pt-1 text-[#120f0a] text-xl font-semibold">
          {price}
        </h3>
        <Link to={`/dashboard/payment/${membership}`}>
          <button className="btn btn-error my-2">Buy Now</button>
        </Link>
      </div>
      <Check></Check>
    </div>
  );
};

export default Membercart;
