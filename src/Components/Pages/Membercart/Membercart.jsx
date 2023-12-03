import React from "react";
import { Link } from "react-router-dom";
const Membercart = ({ mem }) => {
  const { img, price, membership } = mem;
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
    </div>
  );
};

export default Membercart;
